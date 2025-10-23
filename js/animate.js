const project = document.querySelector("#project");
const customize = document.querySelector("#customize");
const plugin = document.querySelector("#plugin");
const as = document.querySelectorAll("menu a");
const bar = document.querySelector(".bar");

const positions = {
  project: "84px",
  customize: "123px",
  plugin: "162px"
};

const topOriginal = getComputedStyle(bar).getPropertyValue("top")

function moveBar(targetId) {
  bar.style.top = positions[targetId];
  as.forEach(a => {
    a.addEventListener("mouseover", () => {
        bar.style.scale = "1.04"
    });
    a.addEventListener("mouseout", () => {
        bar.style.scale = "1"
        if (bar.style.top != topOriginal){
          bar.style.top = topOriginal
          switch(topOriginal){
            case "84px":
              project.style.color = "#212121";
              customize.style.color = "#dddddd";
              plugin.style.color = "#dddddd";
              break;
            case "123px":
              project.style.color = "#dddddd";
              customize.style.color = "#212121";
              plugin.style.color = "#dddddd";
              break;
            case "162px":
              project.style.color = "#dddddd";
              customize.style.color = "#dddddd";
              plugin.style.color = "#212121";     
              break;
          }
        }
    });
    if (targetId === "project") {
      project.style.color = "#212121";
      customize.style.color = "#dddddd";
      plugin.style.color = "#dddddd";
    } else if (targetId === "customize") {
      project.style.color = "#dddddd";
      customize.style.color = "#212121";
      plugin.style.color = "#dddddd";
    } else if (targetId === "plugin") {
      project.style.color = "#dddddd";
      customize.style.color = "#dddddd";
      plugin.style.color = "#212121";
    }
  });
}


// Eventos de hover
project.addEventListener("mouseover", () => moveBar("project"));
customize.addEventListener("mouseover", () => moveBar("customize"));
plugin.addEventListener("mouseover", () => moveBar("plugin"));
