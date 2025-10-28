import { transitionAn } from "./transition.js";

document.addEventListener("DOMContentLoaded", () => {
    const backArrow = document.querySelector('.top-side svg');
    const projectOptions = document.querySelectorAll('.project-type .option');
    const continueButton = document.querySelector('.bottom-side > button');

    let selectedProject = null;

    continueButton.disabled = true;
    continueButton.classList.add('disabled');

    backArrow.addEventListener("click", () => {
        transitionAn("../index.html", "oppacity1");
    });

    projectOptions.forEach(option => {
        option.addEventListener('click', () => {
            projectOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            selectedProject = option;

            continueButton.disabled = false;
            continueButton.classList.remove('disabled');
        });
    });

    continueButton.addEventListener('click', () => {
        if (!selectedProject) return;

        const projectName = selectedProject.querySelector('h1')?.textContent.trim();
        localStorage.setItem('selectedProject', JSON.stringify({ project: projectName }));

        transitionAn("creating.html", "oppacity1");
    });
});
