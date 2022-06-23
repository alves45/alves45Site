import http from "http";
import fs from "fs";
import crypto from "crypto";

const PORT = process.env.PORT || 3000;
const DELAY_REQUESTS = 500;

global.app = {
  isProduction: process.env.NODE_ENV === "production",
};

async function preLoadPages() {
  const pathPages = "./Pages/";
  return new Promise((resolve, reject) => {
    console.log("Generating static pages");
    fs.readdirSync(pathPages)
      .filter((el) => el.indexOf(".js") >= 0)
      .forEach((funcPage) => {
        let nameFunc = funcPage.replace(".js", "");
        import(pathPages + funcPage).then((moduleImported) => {
          app[nameFunc] = new moduleImported.default();
          app[nameFunc].render();
          console.log(nameFunc + " loaded");
        });
      });
    resolve();
  });
}

let tokens = [];

async function getTokens() {
  tokens = [];
  console.log("Getting tokens from DB");
}

async function organizePages() {}

function redirectingHTTP(req, res) {
  if (req.headers["x-forwarded-proto"] === "https" && app.isProduction) {
    res.writeHead(302, { Location: process.env.URL_SITE });
    res.end();
    throw new Error("http request");
  }
}

function getInformationRequester(req, res) {
  if (app.isProduction)
    console.log(
      new Date(new Date().setUTCHours(app.isProduction ? 0 : 3)).toLocaleString(
        "pt-BR"
      ) +
        " " +
        (req.headers["x-forwarded-for"] || req.socket.remoteAddress)
    );
}

class cookieParser {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.cache = {};
  }
  names = {
    userId: this.hashName("userId"),
  };
  get userId() {
    return this.cache.userId || this.caching("userId");
  }
  caching(name) {
    let thisCookie = this.get(name);
    this.cache[name] = thisCookie;
    return thisCookie;
  }
  set(name, value) {
    //next step
  }
  get(name) {
    return ((this.req.headers.cookie || "").match(
      this.regularMatch(this.names[name])
    ) || [""])[0];
  }
  regularMatch(name) {
    return new RegExp(`(?<=${name}=)\\w+`, "g");
  }
  hashName(name) {
    return crypto
      .createHash("sha256")
      .update(name)
      .digest("base64")
      .slice(0, 3);
  }
}

function server() {
  http
    .createServer((req, res) => {
      try {
        redirectingHTTP(req, res);
        getInformationRequester(req, res);
        res.statusCode = 200;
        let cookie = new cookieParser(req, res);
        console.log(cookie.names.userId);
        console.log(cookie.userId);
        let response = "";
        req.addListener("data", (chunk) => {
          response = chunk;
        });
        req.addListener("end", (a) => {
          if (response) {
            res.setHeader("Consent-Type", "application/json");
            res.end(response);
          } else {
            res.setHeader("Set-Cookie", "batata=321;max-age=10");
            res.setHeader("content-encoding", app.login?.compress || "");
            res.setHeader("Content-Type", "text/html");
            //res.statusCode = 304;
            res.end(app.login?.HTML || "");
          }
        });
      } catch (error) {
        console.log(error);
      }
    })
    .listen(PORT);
}

Promise.all([preLoadPages(), getTokens(), organizePages()])
  .then(server)
  .catch(console.log);
