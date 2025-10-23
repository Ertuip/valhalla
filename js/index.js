import { transitionAn } from "./transition.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("criar").addEventListener('click', () => {
        transitionAn("pages/creating.html", "oppacity1");
    });
});1