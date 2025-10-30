document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".checkbox");

    checkboxes.forEach((div, index) => {
        const svg = div.querySelector("svg");
        const savedState = localStorage.getItem(`checkbox-${index}`);

        if (savedState === "habilitado") {
            svg.classList.add("habilitado");
            svg.style.opacity = "1";
        }

        div.addEventListener("click", () => {
            if (svg.classList.contains("habilitado")) {
                svg.classList.remove("habilitado");
                svg.classList.add("desabilitando");
                localStorage.setItem(`checkbox-${index}`, "desabilitado");
            } else {
                svg.classList.remove("desabilitando");
                svg.classList.add("habilitado");
                localStorage.setItem(`checkbox-${index}`, "habilitado");
            }
        });

        svg.addEventListener("animationend", () => {
            svg.style.opacity = svg.classList.contains("desabilitando") ? "0" : "1";
        });
    });
});
