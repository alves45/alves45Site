import component from "../tools/component.js";

export default class extends component {
  constructor(that) {
    super(that);
    super.builder(that, this);
  }
  preRender = (props) => {
    props = Object.assign(
      {
        inputs: [],
        confirm: "",
        correct: () => {},
      },
      props
    );
    const form = this.document.createElement("form");
    return form;
  };
  render = this.buildRender();
}
