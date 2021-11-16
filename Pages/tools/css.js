export default class {
  constructor(cache) {
    cache.sheet.key = cache.key = "a";
    this.cache = cache;
    this.global = [];
    this.classCss = [];
  }
  add = (...args) => {
    this.classCss = this.classCss.concat(args);
  };
  addG = (...args) => {
    this.global = this.global.concat(args);
  };
  buildStyles() {
    return this.global
      .map((thisClass) => {
        console.log(this.getStyleByClass(thisClass));
        return this.getStyleByClass(thisClass).replace(
          RegExp(`${"." + thisClass}\\s*`, "g"),
          ""
        );
      })
      .concat(this.classCss.map(this.getStyleByClass))
      .join("");
  }
  getStyleByClass(className) {
    className = className.replace(this.cache.key + "-", "");
    return this.cache.inserted[className];
  }
}
