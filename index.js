import http from "http";
import fs from "fs";

const AppUrl = "https://alves45.herokuapp.com/";
const PORT = process.env.PORT || 3000;

global.app = {};

const pathPages = "./Pages/";
fs.readdirSync(pathPages)
  .filter((el) => el.indexOf(".js") >= 0)
  .forEach((funcPage) => {
    let nameFunc = funcPage.replace(".js", "");
    import(pathPages + funcPage)
      .then((moduleImported) => {
        app[nameFunc] = new moduleImported.default();
        app[nameFunc].render();
        console.log(nameFunc + " loaded");
      })
      .catch(console.log);
  });

http
  .createServer((req, res) => {
    if (
      req.headers["x-forwarded-proto"] == "https" ||
      process.env.NODE_ENV !== "production"
    ) {
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
          console.log(
            new Date().toISOString() +
              " " +
              (req.headers["x-forwarded-for"] || req.socket.remoteAddress)
          );
          res.setHeader("content-encoding", app.login.compress);
          res.setHeader("Content-Type", "text/html");
          res.end(app.login.HTML);
        }
      });
    } else {
      res.writeHead(302, { Location: AppUrl });
      res.end();
    }
  })
  .listen(PORT);
