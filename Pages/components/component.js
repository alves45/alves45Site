export default class {
  constructor(thatPage, thatComponent) {
    /**@type {Document} */
    this.document = thatPage.window.document;
  }
  builder(thatPage, thatComponent) {
    thatPage.style.add(thatComponent.style);
    this.render = thatComponent.render.bind(thatPage);
  }
  replaceClassCss = "replaceClassCss";
}
