import { css, cache } from "@emotion/css";
import { _style, consts } from "../tools/css.js";
export default class {
  constructor(that) {
    /**@type {Window} */
    this.document = that.window.document;
    that.style.add(this.styleInputTxt);
  }
  a = (() => {
    const heightSize = consts.s8;
    const fontSize = consts.s4;
    const bottomBorder = consts.s0_5;
    const styleInputTxt = css`
      margin-top: ${consts.s2};
      display: flex;
      flex-direction: column;
      label {
        font-size: ${fontSize};
        order: 1;
        transform: translateY(${parseFloat(heightSize) * 0.8 + "rem"});
        pointer-events: none;
      }
      span {
        order: 3;
        transform: scaleX(0) translateY(-${bottomBorder});
        height: 0;
        border-top: ${bottomBorder} solid ${consts.blue700};
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
      :focus-within label {
        transform: translate(-10%, 15%) scale(0.8);
        color: ${consts.blue700};
      }
      input:not(:placeholder-shown) ~ label {
        transform: translate(-10%, 15%) scale(0.8);
      }
      input:required ~ label::after {
        content: "*";
        color: ${consts.blue700};
      }
      input:valid ~ label::after {
        content: "";
      }
      :focus-within span {
        transform: scaleX(1) translateY(-${bottomBorder});
      }
    `;
    this.styleInputTxt = styleInputTxt;
  })();
  _render(props) {
    props = Object.assign(
      {
        label: "Type something",
        required: false,
        type: "text",
      },
      props
    );
    const inputTxt = this.document.createElement("div");
    inputTxt.innerHTML = `<div class="styleInputTxt">
    <span></span>
    <input placeholder=" "type="${props.type}"${
      props.required ? "required" : ""
    }/>
    <label>${props.label}
    </label>
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
    const thisFunction = Function(...args, body);
    return thisFunction;
  })();
}
