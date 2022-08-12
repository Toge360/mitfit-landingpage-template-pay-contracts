// every dependency has to be imported here
// css, scss, image, fonts etc.
import bulma from "./assets/scss/bulma.scss"; // main bulma styles
import "@mdi/font/css/materialdesignicons.min.css"; // MD-Icons (https://pictogrammers.github.io/@mdi/font/5.3.45/)

/* Action-Button
Auf Klick scrollt die Page zum #plugin DIV */
const scrollTarget = document.getElementById('plugin');
const actionButtons = document.getElementsByClassName("action-button");

for (let button of actionButtons) {
  button.addEventListener("click", function(e) {
    scrollTarget.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
    e.preventDefault();
  });
}

