import { css } from "@emotion/css";
import { consts } from "../tools/css.js";
import component from "./component.js";
import { func2str } from "../tools/js2str.js";

export default class extends component {
  constructor(that) {
    super(that);
    super.builder(that, this);
  }
  style = (() => {
    return css({
      backgroundColor: consts.c5,
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
  /**
   *render
   * @param {Function} render
   * @return {HTMLElement}
   */
  render = (() => {
    let { args, body } = func2str((props) => {
      const card = this.document.createElement("div");
      card.classList.add("replaceThisTextWithTheClassCss");
      card.append(...props);
      return card;
    });
    const thisFunction = Function(
      ...args,
      body.replace("replaceThisTextWithTheClassCss", this.style)
    );
    return thisFunction;
  })();
}
