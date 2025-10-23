export function createSVG(pathd) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "512pt");
  svg.setAttribute("height", "512pt");
  svg.setAttribute("viewBox", "0 0 512 512");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  const g = document.createElementNS(svgNS, "g");
  g.setAttribute("transform", "translate(0,512) scale(0.1,-0.1)");
  g.setAttribute("stroke", "none");
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", pathd);

  g.appendChild(path);
  svg.appendChild(g);

  return svg;
}