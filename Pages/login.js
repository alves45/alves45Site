import { css, keyframes } from "@emotion/css";
import { consts } from "./tools/css.js";
import _inputTxt from "./components/inputTxt.js";
import page from "./tools/classPages.js";

export default class extends page {
  render = () => {
    let document = this.window.document;
    var inputTxt = new _inputTxt(this);
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
    const headerCard = document.createElement("h1");
    headerCard.textContent = "LOGIN";
    const headerCardStyle = css({
      marginBottom: consts.s4,
      fontSize: consts.s6,
      color: consts.c3,
    });
    headerCard.className = headerCardStyle;
    const styleCard = css({
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
    card.className = styleCard;
    this.style.add(styleCard, headerCardStyle);
    card.append(headerCard, user, password);
    super.render();
  };
}
