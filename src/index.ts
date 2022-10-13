import "./style.css";
import { isValidUsername } from "./util";
// import { animateCSS } from "./animatecss";

let input_username = (document.querySelector("#input_username") as HTMLInputElement);

input_username.addEventListener("change", () => {
  if (isValidUsername(input_username.value).isValid == false) {
    alert(isValidUsername(input_username.value).message);
  }
})