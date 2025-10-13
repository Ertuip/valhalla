const iconBox = document.querySelectorAll(".icon-box");

iconBox.forEach(box => {
  const svg = box.querySelector("svg g");

  if (!svg) return;

  svg.style.transition = "fill 0.2s ease";

  box.addEventListener("mouseenter", () => {
    svg.setAttribute("fill", "#457ec0");
  });

  box.addEventListener("mouseleave", () => {
    svg.setAttribute("fill", "white");
  });
});
