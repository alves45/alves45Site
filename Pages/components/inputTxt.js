import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import { func2str } from "../tools/js2str.js";
import component from "./component.js";
export default class extends component {
  constructor(that) {
    super(that);
    super.builder(that, this);
  }
  style = (() => {
    const heightSize = consts.s7;
    const fontSize = consts.s4;
    const bottomBorder = consts.s0_5;
    const smallBottomBorder = parseFloat(bottomBorder) / 2 + "rem";
    return css`
      margin-top: ${consts.s2};
      width: 100%;
      display: flex;
      flex-direction: column;
      label {
        color: ${consts.colors.background};
        font-size: ${fontSize};
        order: 1;
        transform: translateY(${parseFloat(heightSize) * 0.8 + "rem"});
        pointer-events: none;
      }
      span {
        order: 3;
        transform: scaleX(0) translateY(-${smallBottomBorder});
        height: 0;
        border-top: ${bottomBorder} solid ${consts.colors.background};
      }
      input {
        height: ${heightSize};
        width: 100%;
        font-size: ${fontSize};
        order: 2;
        background-color: transparent;
        outline: none;
        border: 0;
        border-bottom: ${smallBottomBorder} solid black;
      }
      input:invalid:not(:placeholder-shown, :focus-within) ~ label,
      input:invalid:not(:placeholder-shown, :focus-within) {
        color: ${consts.red700};
        border-color: ${consts.red700};
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
        transform: scaleX(1) translateY(-${smallBottomBorder});
      }
    `;
  })();
  render = (() => {
    let { args, body } = func2str((props) => {
      props = Object.assign(
        {
          label: "Type something",
          required: false,
          type: "text",
          pattern: "",
          title: "",
        },
        props
      );
      const inputTxt = this.document.createElement("div");
      inputTxt.innerHTML = `<div class="replaceThisTextWithTheClassCss">
      <span></span>
      <input placeholder=" "type="${props.type}"${
        props.required ? "required" : ""
      }
      ${props.pattern ? 'pattern="' + props.pattern + '"' : ""}
      ${props.title ? 'title="' + props.title + '"' : ""}/>
      <label>${props.label}
      </label>
    </div>`;
      return inputTxt;
    });
    const thisFunction = Function(
      ...args,
      body.replace("replaceThisTextWithTheClassCss", this.style)
    );
    return thisFunction;
  })();
}
