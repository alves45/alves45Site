import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import component from "./component.js";
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
      outline: "none",
      border: "none",
      ":focus": {
        // boxShadow: consts.s1 + consts.s1 + consts.colors.background,
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
