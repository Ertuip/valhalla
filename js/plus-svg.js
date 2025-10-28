document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelectorAll(".plugin button");
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

        
    });
});
