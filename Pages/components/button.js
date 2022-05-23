import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import component from "../tools/component.js";
export default class extends component {
  constructor(that) {
    super(that);
    super.builder(that, this);
  }
  style = (() => {
    return css({
      width: "100%",
      height: consts.s8,
      backgroundColor: consts.colors.onPrimary,
      fontSize: consts.s4,
      marginTop: consts.s2,
      marginBottom: consts.s2,
      borderRadius: consts.s2,
      color: consts.colors.onBackground,
      border: "none",
      cursor: "pointer",
      ":hover": {
        opacity: 0.8,
      },
      ":focus": {
        outline: `${consts.s0_5} solid ${consts.colors.onPrimary}`,
        outlineOffset: consts.s0_5,
      },
    });
  })();
  preRender = (props) => {
    props = Object.assign(
      {
        label: "OK",
      },
      props
    );
    const button = this.document.createElement("button");
    button.classList.add("replaceClassCss");
    button.innerHTML = props.label;
    button.type = "button";
    return button;
  };
  render = this.buildRender();
}
