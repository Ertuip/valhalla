const icons = document.querySelectorAll(".icons");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const mixed = document.querySelector(".mixed");
dark.style.backgroundColor = "#3c3c3c";


icons.forEach(icon => {
  icon.addEventListener("click", () => {
    let theme = icon.querySelector("p").textContent;
    switch (theme) {
      case "Escuro":
        dark.classList.remove("selected")
        light.classList.remove("selected")
        mixed.classList.remove("selected")
        dark.classList.add("selected")

        dark.style.backgroundColor = "#3c3c3c";
        light.style.backgroundColor = "#333333";
        mixed.style.backgroundColor = "#333333";
        break;
      case "Claro":
        dark.classList.remove("selected")
        light.classList.remove("selected")
        mixed.classList.remove("selected")
        light.classList.add("selected")

        dark.style.backgroundColor = "#333333";
        light.style.backgroundColor = "#3c3c3c";
        mixed.style.backgroundColor = "#333333";
        break;
      case "Misto":
        dark.classList.remove("selected")
        light.classList.remove("selected")
        mixed.classList.remove("selected")
        mixed.classList.add("selected")

        dark.style.backgroundColor = "#333333";
        light.style.backgroundColor = "#333333";
        mixed.style.backgroundColor = "#3c3c3c";
        break;
      default:
        console.warn("Tema desconhecido:", theme);
    }
  });
});