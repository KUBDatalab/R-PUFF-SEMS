function alignWebRPlots() {
  document.querySelectorAll(".reveal .qwebr-console-area").forEach(container => {
    const outcode = container.querySelector(".qwebr-output-code-area");
    if (!outcode) return;

    const c = container.getBoundingClientRect();
    const o = outcode.getBoundingClientRect();

    const offset = Math.max(0, o.top - c.top);
    container.style.setProperty("--plot-offset", `${offset}px`);
  });
}

// Kør ved load og resize
window.addEventListener("load", alignWebRPlots);
window.addEventListener("resize", alignWebRPlots);

// Hvis Reveal.js bruges: kør når slides skifter
if (window.Reveal) {
  Reveal.on("ready", alignWebRPlots);
  Reveal.on("slidechanged", alignWebRPlots);
}
