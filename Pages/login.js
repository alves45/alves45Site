import { css, keyframes } from "@emotion/css";
import { consts } from "./tools/css.js";
import _inputTxt from "./components/inputTxt.js";
import page from "./tools/classPages.js";
export default class extends page {
  constructor() {
    super();
  }
  render = () => {
    let document = this.window.document;
    let inputTxt = new _inputTxt(this);
    this.style.addG(css`
      body {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `);
    const card = document.createElement("div");
    document.body.appendChild(card);
    const user = inputTxt.render({
      label: "Usuário",
      required: true,
      type: "text",
      pattern: "[0-9]*",
      title: "Só para testar mesmo, só pode ter números",
    });
    const password = inputTxt.render({
      label: "Senha",
      required: true,
      type: "password",
    });
    card.appendChild(user);
    card.appendChild(password);
    const styleCard = css`
      background-color: ${consts.gray200};
      padding: ${consts.s5};
      border-radius: ${consts.s2};
    `;
    card.className = styleCard;
    this.style.add(styleCard);
    super.render();
  };
}
