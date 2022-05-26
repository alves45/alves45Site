import { css, keyframes } from "@emotion/css";
import page from "./tools/classPages.js";
import { consts } from "./tools/css.js";
export default class extends page {
  render = () => {
    let document = this.window.document;
    this.document = document;
    let card = new this.components.card(this).render;
    let inputTxt = new this.components.inputTxt(this).render;
    let button = new this.components.button(this).render;
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
      title: "Digite o nome de usuário",
    });
    const password = inputTxt({
      label: "Senha",
      required: true,
      type: "password",
      title: "Digite a senha do usuário",
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
    const form = document.createElement("form");
    form.append(user, password, confirm);
    document.body.appendChild(card([headerCard, form]));
    super.render();
  };
}
