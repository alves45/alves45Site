import { promises as fs } from "fs";
import path from "path";
import zlib from "zlib";
import { JSDOM } from "jsdom";
import { css, cache } from "@emotion/css";
import { consts, _style } from "./css.js";
const whitePage = await fs
  .readFile("./Pages/whiteWindow.html", "utf8")
  .catch((err) => console.log("Not load whitePage " + err));

const pathComponents = "./Pages/components/";
export default class {
  constructor() {
    /**@type {Window} */
    this.window = new JSDOM(whitePage).window;
    this.HTML = this.compress = "";
    this.style = new _style(cache);
    // Object.assign(this, components);
  }
  // components2 = await (async () => {
  //   let _components = {};
  //   (await fs.readdir(pathComponents)).forEach((nameComponent) => {
  //     console.log(nameComponent)
  //     _components[nameComponent.split(".")[0]] = (await import(path.resolve(pathComponents, nameComponent))).default
  //     })
  //   return _components;
  // })();
  render() {
    let document = this.window.document;
    if (process.env.NODE_ENV !== "production") {
      let devReloadScript = document.createElement("script");
      document.head.appendChild(devReloadScript);
      devReloadScript.innerHTML =
        "(" +
        (() => {
          let toggle = false;
          let controller = new AbortController();
          let signal = controller.signal;
          setInterval(() => {
            var timeout = setTimeout(() => {
              controller.abort();
            }, 200);
            fetch("/waitRes", { signal })
              .then(() => {
                clearInterval(timeout);
                if (toggle) {
                  location.reload();
                } else {
                }
              })
              .catch(() => {
                clearInterval(timeout);
                controller = new AbortController();
                signal = controller.signal;
                toggle = true;
              });
          }, 500);
        }).toString() +
        ")()";
    }
    const styleDOM = document.createElement("style");
    this.style.addG(
      css({
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
          transition: "all ease-in-out 200ms",
        },
        "@font-face": {
          fontFamily: '"icons"',
          fontStyle: "normal",
          fontWeight: 400,
          src: 'url(https://fonts.gstatic.com/s/materialicons/v117/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2")',
        },
        ".icons": {
          fontFamily: '"icons"',
          fontSize: "1rem",
        },
        ":root": {
          fontSize: "5vw",
        },
        "@media (max-aspect-ratio: 1/1)": {
          ":root": {
            fontSize: "5vw",
          },
        },
        "@media (pointer: fine)": {
          ":root": {
            fontSize: "min(2.5vh, 2.5vw)",
          },
        },
        body: {
          backgroundColor: consts.colors.background,
          height: "100%",
        },
      })
    );
    styleDOM.innerHTML = this.style.buildStyles();
    document.head.appendChild(styleDOM);
    if (process.env.NODE_ENV !== "production") {
      this.HTML = document.documentElement.innerHTML;
      this.compress = "utf-8";
    } else {
      this.HTML = zlib.brotliCompressSync(
        new Buffer.from(document.documentElement.innerHTML)
      );
      this.compress = "br";
    }
  }
}
