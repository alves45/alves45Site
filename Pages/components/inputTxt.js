import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import { func2str } from "../tools/js2str.js";
import component from "../tools/component.js";
export default class extends component {
  constructor(that) {
    super(that);
    super.builder(that, this);
  }
  style = (() => {
    const heightSize = consts.s7;
    const fontSize = consts.s4;
    const bottomBorder = consts.s0_75;
    const smallBottomBorder = consts.s0_25;
    return css({
      width: "100%",
      display: "flex",
      flexDirection: "column",
      marginTop: consts.s2,
      marginBottom: consts.s2,
      label: {
        color: consts.colors.background,
        fontSize: fontSize,
        order: 1,
        transform: `translateY(${
          (parseFloat(heightSize) * 0.8).toFixed(1) + "rem"
        })`,
        pointerEvents: "none",
      },
      span: {
        order: 3,
        transform: `scaleX(0) translateY(-${smallBottomBorder})`,
        height: 0,
        borderTop: `${bottomBorder} solid ${consts.colors.background}`,
      },
      input: {
        height: heightSize,
        fontSize: fontSize,
        order: 2,
        backgroundColor: "transparent",
        outline: "none",
        border: 0,
        borderBottom: `${smallBottomBorder} solid ${consts.colors.background}`,
      },
      "input:focus-within": {
        borderBottom: `${smallBottomBorder} solid ${consts.colors.primaryContainer}`,
      },
      "input:invalid:not(:placeholder-shown, :focus-within) ~ label, input:invalid:not(:placeholder-shown, :focus-within)":
        {
          color: consts.colors.error,
          borderColor: consts.colors.error,
        },
      ":focus-within label": {
        transform: `translate(-10%, 15%) scale(0.8)`,
        color: consts.colors.primaryContainer,
      },
      "input:not(:placeholder-shown) ~ label": {
        transform: `translate(-10%, 15%) scale(0.8)`,
      },
      "input:required ~ label::after": {
        content: '"*"',
        color: consts.colors.primaryContainer,
      },
      "input:valid ~ label::after": {
        content: '""',
      },
      ":focus-within span": {
        transform: `scaleX(1) translateY(-${smallBottomBorder})`,
        borderTop: `${bottomBorder} solid ${consts.colors.primaryContainer}`,
      },
    });
  })();
  preRender = (props) => {
    props = Object.assign(
      {
        label: "Type something",
        required: false,
        type: "text",
        pattern: "",
        title: "aaaaaaaaaaaaaaaa",
      },
      props
    );
    const component = this.document.createElement("div");
    component.classList.add("replaceClassCss");
    const input = this.document.createElement("input");
    input.placeholder = " ";
    input.type = props.type;
    input.required = props.required;
    input.pattern = props.pattern;
    input.title = props.title || props.label;
    const label = this.document.createElement("label");
    label.innerHTML = props.label;
    component.append(this.document.createElement("span"), input, label);
    return component;
  };
  /**
   * @typedef {Object} props
   * @property {string} label
   * @property {boolean} required
   * @property {(text | password)} type
   * @property {RegExp} pattern
   * @property {string} title
   * /
   /**
    * @param {props} props
   * @returns {HTMLInputElement}
   */
  render = this.buildRender();
}
