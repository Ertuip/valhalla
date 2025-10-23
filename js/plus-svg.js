import { createSVG } from "../js/csvg.js";


document.addEventListener("DOMContentLoaded", () => {
    const plus = `
    M2492 5109 c-45 -13 -108 -80 -121 -126 -7 -26 -11 -392 -11 -1130
    l0 -1093 -1113 -2 -1113 -3 -41 -27 c-63 -41 -88 -90 -88 -169 0 -54 5 -72 27
    -106 15 -22 44 -51 65 -64 l38 -24 1112 -3 1113 -2 2 -1113 3 -1112 24 -38
    c13 -21 42 -50 64 -65 34 -23 52 -27 107 -27 55 0 73 4 107 27 22 15 51 44 64
    65 l24 38 3 1112 2 1113 1113 2 1112 3 38 24 c21 13 50 42 65 64 23 34 27 52
    27 107 0 55 -4 73 -27 107 -15 22 -44 51 -65 64 l-38 24 -1112 3 -1113 2 -2
    1113 -3 1112 -24 38 c-47 76 -151 113 -239 86z
    `;
    const button = document.querySelectorAll(".plugin button");
    const imgh2 = document.querySelectorAll(".imgh2");
    const activeds = document.querySelector(".activeds");

    button.forEach(element => {
        const svg = element.querySelector("svg g");
        if (!svg) return;
        
        element.addEventListener("mouseover", () => {
            svg.setAttribute("fill", "#5091dc");
        });
        element.addEventListener("mouseout", () => {
            svg.setAttribute("fill", "white");
        });

        element.addEventListener("click", () => {
            // 1. Navega para o ancestral .plugin (pai do botão)
            const pluginContainer = element.closest(".plugin");
            if (!pluginContainer) return;

            // 2. Encontra o h2 e a imagem DENTRO do plugin clicado
            const h2Element = pluginContainer.querySelector(".imgh2 h2");
            const imgElement = pluginContainer.querySelector(".imgh2 img");
            
            if (!h2Element || !imgElement) return;

            const h2Text = h2Element.textContent;
            const imgSrc = imgElement.src; // Pega o src atual da imagem

            // 3. Cria a nova estrutura (apenas para o plugin clicado)
            let elements = document.createElement("div")
            elements.classList.add("elements")

            let img = document.createElement("img")
            
            // Usamos o src que já existe no HTML para definir o src da nova imagem
            // Isso torna o código mais robusto se você adicionar mais plugins
            img.src = imgSrc; 
            elements.append(img);

            let name = document.createElement("h2")
            name.textContent = h2Text;
            elements.append(name);

            let divbtns = document.createElement("div")
            divbtns.classList.add("buttons")
            elements.append(divbtns);

            let btngenerical = document.createElement("button")
            btngenerical.append(createSVG(plus)) // Note: O 'plus' aqui será o botão de "remover" ou um novo "adicionar". Se for para remover, a lógica precisará ser expandida.
            divbtns.append(btngenerical); // Adiciona o botão à divbuttons

            activeds.append(elements)

            // OPTIONAL: Desabilita/esconde o botão de "Adicionar" original após o clique.
            // element.disabled = true; 
            // element.style.display = 'none'; 
        });
    });
});