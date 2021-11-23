import { css, cache, keyframes } from "@emotion/css";
import classStyle from "./tools/css.js";
import _inputTxt from "./components/inputTxt.js";
export default class {
  constructor(window) {
    /**@type {Window} */
    this.window = window;
    this.HTML = "";
    this.style = new classStyle(cache);
  }
  render = () => {
    let document = this.window.document;
    let inputTxt = new _inputTxt(this);
    if (process.env.NODE_ENV !== "production") {
      document.head.innerHTML += `<meta http-equiv="refresh" content="5" />`;
    }
    const styleDOM = document.createElement("style");
    this.style.addG(css`
      body {
        min-height: 100vh;
        /* mobile viewport bug fix */
        min-height: -webkit-fill-available;
      }

      html {
        height: -webkit-fill-available;
        -webkit-text-size-adjust: 100%;
      }
      body {
        background-color: ${this.style.colors.gray["200"]};
        min-height: -webkit-fill-available;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        transition: ease-in-out 200ms;
      }
      h1 {
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
    `);
    document.body.appendChild(inputTxt.render("Digite Algo", true, "text"));
    const h1 = document.createElement("h1");
    h1.innerHTML = "Batatinha lavada";
    document.body.appendChild(h1);
    styleDOM.innerHTML = this.style.buildStyles();
    document.head.appendChild(styleDOM);
    let scripts = document.createElement("script");
    scripts.innerHTML = `
    window.addEventListener('resize', () => {
      //document.body.innerHTML+= " "+ window.innerHeight + " " + window.innerWidth + " " + window.devicePixelRatio;
      document.documentElement.style.setProperty('--vh', \`\${window.innerHeight/100}px\`);
      console.log(window.innerHeight, window.innerWidth, window.devicePixelRatio);
    });`;
    document.head.appendChild(scripts);
    this.HTML = document.documentElement.innerHTML;
    console.log("page loaded");
  };
}
