import { css, cache, keyframes } from "@emotion/css";
import classStyle from "./tools/css.js";

export default class {
  constructor(window) {
    /**@type {Window} */
    this.window = window;
    this.HTML = "";
    this.style = new classStyle(cache);
  }
  render = () => {
    let document = this.window.document;
    // document.head.innerHTML += `<meta http-equiv="refresh" content="5" />`;
    const styleDOM = document.createElement("style");
    this.style.addG(css`
      body {
        background-color: purple;
      }
    `);
    styleDOM.innerHTML = this.style.buildStyles();
    console.log(styleDOM.innerHTML);
    document.head.appendChild(styleDOM);
    let myFistElementCreated = document.createElement("h1");
    myFistElementCreated.innerHTML =
      "This page contain component(s) was made without express, react only fs, jsdom, http and blood";
    document.body.appendChild(myFistElementCreated);
    this.HTML = document.documentElement.innerHTML;
    console.log("page loaded");
  };
}
