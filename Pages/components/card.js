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
      backgroundColor: consts.colors.onBackground,
      padding: consts.s5,
      marginLeft: consts.s1,
      marginRight: consts.s1,
      borderRadius: consts.s2,
      width: "90%",
      "@media (pointer: fine)": {
        width: "auto",
      },
    });
  })();
  preRender = (props) => {
    const card = this.document.createElement("div");
    card.classList.add("replaceClassCss");
    card.append(...props);
    return card;
  };
  render = this.buildRender();
}
