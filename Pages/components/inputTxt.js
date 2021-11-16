import { css } from "@emotion/css";
import exportComponent from "../tools/exportComponent";
export default function (that) {
  /**@type {Window} */
  let document = that.window.document;
  const inputTxt = document.createElement("div");
  const styleInputTxt = css`
    display: flex;
    flex-direction: column;
    padding: 10%;
    label {
      height: 1rem;
      font-size: 1rem;
      order: 1;
      display: block;
      transform: translateY(90%);
      z-index: -1;
      transition: ease-in-out 300ms;
      width: min-content;
    }
    div {
      order: 3;
      transition: ease-in-out 300ms;
      transform: scaleX(0) translateY(-0.1rem);
      height: 0;
      border: 0;
      border-bottom: 0.1rem solid red;
    }
    input {
      height: 1rem;
      font-size: 1rem;
      order: 2;
      background-color: transparent;
      outline: none;
      border: 0;
      border-bottom: 0.1rem solid black;
    }
    input:not(:placeholder-shown) ~ label,
    input:focus ~ label {
      transform: scale(0.9) translate(-5.55%, 0);
    }
    input:focus ~ div {
      transform: scaleX(1) translateY(-0.1rem);
    }
  `;
  inputTxt.innerHtml = `  <div class="${styleInputTxt}">
  <input type="text" placeholder=" " required />
  <div></div>
  <label>Batata: </label>
</div>
`;
  that.add(styleInputTxt);
  return new exportComponent(inputTxt);
}
