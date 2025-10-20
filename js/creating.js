import { transitionAn } from "./transition.js";

const langs = document.querySelectorAll('.lang');
const createButton = document.querySelector('.bottom-side > button');
const lines = document.querySelectorAll('.line');
const backArrow = document.querySelector('.top-side svg');

let selectedLang = null;

createButton.disabled = true;
createButton.classList.add('disabled');

langs.forEach(lang => {
    lang.addEventListener('click', () => {
        langs.forEach(l => l.classList.remove('selected'));
        lang.classList.add('selected');
        selectedLang = lang;
        createButton.disabled = false;
        createButton.classList.remove('disabled');
    });
});

createButton.addEventListener('click', () => {
    if (!selectedLang) return;
    if (lines[0]) lines[0].style.backgroundColor = '#dddddd';

    const name = selectedLang.querySelector('.imgh1 h1')?.textContent.trim();
    localStorage.setItem('selectedLang', JSON.stringify({ language: name }));

});

backArrow.addEventListener('click', () => {
    transitionAn("../index.html", "slide-left")
});