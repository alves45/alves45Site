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
      document.head.innerHTML += `<meta http-equiv="refresh" content="5" />`;
    }
    const styleDOM = document.createElement("style");
    this.style.addG(css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: Arial, Helvetica, sans-serif;
        transition: ease-in-out 200ms;
      }
      @font-face {
        font-family: "icons";
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/materialicons/v117/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
          format("woff2");
      }
      .icons {
        font-family: "icons";
        font-size: 1rem;
      }
      :root {
        font-size: 6vh;
      }
      @media (max-aspect-ratio: 1/1) {
        :root {
          font-size: 6vw;
        }
      }
      @media (pointer: fine) {
        :root {
          font-size: min(3vh, 3vw);
        }
      }
      body {
        background-color: ${consts.gray900};
      }
    `);
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
