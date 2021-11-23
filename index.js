import http from "http";
import fs from "fs";
import { JSDOM } from "jsdom";

const AppUrl = "https://alves45.herokuapp.com/";
const PORT = process.env.PORT || 3000;

global.app = {
  whitePage: fs.readFileSync("./whiteWindow.html", "utf8"),
  newWindow: () => {
    return new JSDOM(app.whitePage).window;
  },
};

const pathPages = "./Pages/";
fs.readdirSync(pathPages)
  .filter((el) => el.indexOf(".js") >= 0)
  .forEach((funcPage) => {
    let nameFunc = funcPage.replace(".js", "");
    import(pathPages + funcPage)
      .then((moduleImported) => {
        let newWindow = app.newWindow();
        app[nameFunc] = new moduleImported.default(newWindow);
        app[nameFunc].render();
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
          res.setHeader("content-encoding", "br");
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
