import bulma from "./assets/scss/bulma.scss"; // main bulma styles
//import "@mdi/font/css/materialdesignicons.min.css"; // MD-Icons (https://pictogrammers.github.io/@mdi/font/5.3.45/)
/* Um die App Größe zu reduzieren, spreche ich hier via JS Version von MDI direkt die verwendeten Icons an.
Diese werde in der SVG-Section zugewiesen.*/
import { mdiAlertOctagram } from '@mdi/js';
import { mdiEmoticon } from '@mdi/js';
import { mdiPiggyBank } from '@mdi/js';

console.log(mdiAlertOctagram); // "M...Z"

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

// ICONS SVG

const svgIcon1 = `<svg class="svg-icon" viewBox="0 0 25 25">
<path d="${mdiAlertOctagram}"></path>
</svg>`

const svgIcon2 = `<svg class="svg-icon" viewBox="0 0 25 25">
<path d="${mdiEmoticon}"></path>
</svg>`

const svgIcon3 = `<svg class="svg-icon" viewBox="0 0 25 25">
<path d="${mdiPiggyBank}"></path>
</svg>`

document.getElementById("icon1").innerHTML = svgIcon1;
document.getElementById("icon2").innerHTML = svgIcon2;
document.getElementById("icon3").innerHTML = svgIcon3;