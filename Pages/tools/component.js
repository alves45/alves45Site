import { func2str } from "./js2str.js";
export default class {
  constructor(thatPage, thatComponent) {
    /**@type {Document} */
    this.document = thatPage.window.document;
  }
  builder(thatPage, thatComponent) {
    thatPage.style.add(thatComponent.style || "");
    thatComponent.render = thatComponent.render.bind(thatPage);
  }
  /**
   * @param {Void}
   * @return {function(): HTMLElement}
   */
  buildRender() {
    let { args, body } = func2str(this.preRender);
    const render = Function(
      ...args,
      body.replace(this.replaceClassCss, this.style)
    );
    /**
     * @param {object} props
     * @returns {HTMLElement}
     */
    return render;
  }
  replaceClassCss = "replaceClassCss";
}
