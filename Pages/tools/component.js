import { func2str } from "./js2str.js";
import { promises as fs } from "fs";
import path from "path";

let components = {};

const pathComponents = "./Pages/components/";

await (async () => {
  fs.readdir(pathComponents).then((nameComponents) => {
    nameComponents.forEach((nameComponent) => {
      import(path.resolve(pathComponents, nameComponent)).then((component) => {
        components[nameComponent.slice(".")[0]] = component.default;
      });
    });
  });
})();

export { components };

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
