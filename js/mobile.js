import { transitionAn } from "./transition.js";

document.addEventListener("DOMContentLoaded", () => {
    const backArrow = document.querySelector('.top-side svg');
    const projectOptions = document.querySelectorAll('.project-type .option');
    const createButton = document.querySelector('.bottom-side > button');

    let selectedProject = null;

    // Estado inicial do botão
    createButton.disabled = true;
    createButton.classList.add('disabled');

    // Botão de voltar
    backArrow.addEventListener("click", () => {
        transitionAn("structure.html", "oppacity1");
    });

    // Seleção de opções
    projectOptions.forEach(option => {
        option.addEventListener('click', () => {
            projectOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            selectedProject = option;

            // Habilita o botão
            createButton.disabled = false;
            createButton.classList.remove('disabled');
        });

        // Duplo clique = confirmar e ir direto
        option.addEventListener('dblclick', () => {
            const projectName = option.querySelector('h1')?.textContent.trim();
            if (!projectName) return;

            localStorage.setItem('selectedProject', JSON.stringify({ project: projectName }));
            transitionAn("creating.html", "oppacity1");
        });
    });

    // Clique no botão "Criar Projeto"
    createButton.addEventListener('click', () => {
        if (!selectedProject) return;

        const projectName = selectedProject.querySelector('h1')?.textContent.trim();
        localStorage.setItem('selectedProject', JSON.stringify({ project: projectName }));

        const { exec } = require('child_process');

        exec("code", (error) => {
            if (error) console.error(error);
            window.close();
        });
    });
});
