import fs from "fs";
import zlib from "zlib";
import { JSDOM } from "jsdom";
import { css, cache } from "@emotion/css";
import { consts, _style } from "./css.js";
const whitePage = fs.readFileSync("./whiteWindow.html", "utf8");
export default class page {
  constructor() {
    /**@type {Window} */
    this.window = new JSDOM(whitePage).window;
    this.HTML = this.compress = "";
    this.style = new _style(cache);
  }
  render() {
    let document = this.window.document;
    if (process.env.NODE_ENV !== "production") {
      // if (false) {
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
          fontSize: "6vw",
        },
        "@media (max-aspect-ratio: 1/1)": {
          ":root": {
            fontSize: "6vw",
          },
        },
        "@media (pointer: fine)": {
          ":root": {
            fontSize: "min(3vh, 3vw)",
          },
        },
        body: {
          backgroundColor: consts.gray900,
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
