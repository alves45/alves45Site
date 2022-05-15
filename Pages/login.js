import { css, keyframes } from "@emotion/css";
import page from "./tools/classPages.js";
import { consts } from "./tools/css.js";
import _inputTxt from "./components/inputTxt.js";
import _card from "./components/card.js";
import _button from "./components/button.js";

export default class extends page {
  render = () => {
    let document = this.window.document;
    this.document = document;
    let card = new _card(this).render;
    let inputTxt = new _inputTxt(this).render;
    let button = new _button(this).render;
    this.style.addG(
      css({
        body: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      })
    );
    const user = inputTxt({
      label: "Usuário",
      required: true,
      type: "text",
      pattern: "[0-9]*",
      title: "Só para testar mesmo, só pode ter números",
    });
    const password = inputTxt({
      label: "Senha",
      required: true,
      type: "password",
    });
    const confirm = button({ label: "Entrar" });
    const headerCard = document.createElement("h1");
    headerCard.textContent = "LOGIN";
    const headerCardStyle = css({
      marginBottom: consts.s4,
      fontSize: consts.s6,
      color: consts.colors.onPrimary,
    });
    headerCard.className = headerCardStyle;
    this.style.add(headerCardStyle);
    document.body.appendChild(card([headerCard, user, password, confirm]));
    super.render();
  };
}
