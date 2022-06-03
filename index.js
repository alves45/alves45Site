import http from "http";
import fs from "fs";
import crypto from "crypto";
import { CookieJar } from "jsdom";

const PORT = process.env.PORT || 3000;
const DELAY_REQUESTS = 500;

global.app = {
  isProduction: process.env.NODE_ENV === "production",
};

const pathPages = "./Pages/";

(async () => {
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
})()
  .then(server)
  .catch(console.log);

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

function server() {
  http
    .createServer((req, res) => {
      try {
        redirectingHTTP(req, res);
        res.statusCode = 200;
        let response = "";
        req.addListener("data", (chunk) => {
          response = chunk;
        });
        req.addListener("end", (a) => {
          if (response) {
            res.setHeader("Consent-Type", "application/json");
            res.end(response);
          } else {
            getInformationRequester(req, res);
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
