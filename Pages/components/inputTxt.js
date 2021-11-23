import { css, cache } from "@emotion/css";
import _style from "../tools/css.js";
import exportComponent from "../tools/exportComponent.js";
let aa = "";
export default class {
  constructor(that) {
    /**@type {Window} */
    this.document = that.window.document;
    that.style.add(this.styleInputTxt);
  }
  style = (() => {
    const { size, colors } = new _style(cache);
    const heightSize = size["8"];
    const fontSize = size["4"];
    const bottomBorder = size["0.5"];
    const styleInputTxt = css`
      display: flex;
      flex-direction: column;
      label {
        font-size: ${fontSize};
        order: 1;
        display: block;
        transform: translateY(${parseFloat(heightSize) * 0.8 + "rem"});
        z-index: -1;
        width: auto;
      }
      div {
        order: 3;
        transform: scaleX(0) translateY(-${bottomBorder});
        height: 0;
        border: 0;
        border-bottom: ${bottomBorder} solid ${colors.blue["700"]};
      }
      input {
        height: ${heightSize};
        font-size: ${fontSize};
        order: 2;
        background-color: transparent;
        outline: none;
        border: 0;
        border-bottom: 0.05rem solid black;
      }
      input:focus ~ label {
        transform: scale(0.8) translate(-12.5%, 15%);
        color: ${colors.blue["700"]};
      }
      input:not(:placeholder-shown) ~ label {
        transform: scale(0.8) translate(-12.5%, 15%);
        opacity: 80%;
      }
      input:required ~ label::after {
        content: "*";
        color: ${colors.red["700"]};
      }
      input:valid ~ label::after {
        content: "";
      }
      input:focus ~ div {
        transform: scaleX(1) translateY(-${bottomBorder});
      }
    `;
    this.styleInputTxt = styleInputTxt;
  })();
  _render(label = "Type something", required = false, type = "text") {
    const inputTxt = this.document.createElement("div");
    inputTxt.innerHTML = `<div class="styleInputTxt">
    <input placeholder=" "type="${type}"${required ? "required" : ""}/>
    <div></div>
    <label>${label}</label>
  </div>`;
    return inputTxt;
  }
  render = (() => {
    let functionStr = this._render
      .toString()
      .replace("styleInputTxt", this.styleInputTxt)
      .replace(/(\n|\r|\r\n)/g, "");
    let args = functionStr.match(/(?<=\()[^\)]*(?=\))/g)[0].split(",");
    let body = functionStr.match(/(?<=\{).*(?=\})/g)[0];
    console.log(functionStr);
    const thisFunction = Function(...args, body);
    console.log(thisFunction);
    return thisFunction;
  })();
}
