const icons = document.querySelectorAll(".icons");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const mixed = document.querySelector(".mixed");
dark.style.backgroundColor = "#3c3c3c";

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    let theme = icon.querySelector("p").textContent;
    document.body.classList.remove("dark-theme", "light-theme", "mixed-theme");

    switch (theme) {
      case "Escuro":
        dark.classList.add("selected");
        light.classList.remove("selected");
        mixed.classList.remove("selected");

        dark.style.backgroundColor = "#3c3c3c";
        light.style.backgroundColor = "#333333";
        mixed.style.backgroundColor = "#333333";

        document.body.classList.add("dark-theme");
        break;

      case "Claro":
        dark.classList.remove("selected");
        light.classList.add("selected");
        mixed.classList.remove("selected");

        dark.style.backgroundColor = "#333333";
        light.style.backgroundColor = "#3c3c3c";
        mixed.style.backgroundColor = "#333333";

        document.body.classList.add("light-theme");
        break;

      case "Misto":
        dark.classList.remove("selected");
        light.classList.remove("selected");
        mixed.classList.add("selected");

        dark.style.backgroundColor = "#333333";
        light.style.backgroundColor = "#333333";
        mixed.style.backgroundColor = "#3c3c3c";

        document.body.classList.add("mixed-theme");
        break;

      default:
        console.warn("Tema desconhecido:", theme);
    }
  });
});
