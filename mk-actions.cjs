const fs = require("fs");
const actions = [
  { type: "click", selector: "#play" },
  { type: "assert", selector: "#play", property: "aria-pressed", equals: "true" },
  { type: "click", selector: "#play" },
  { type: "assert", selector: "#play", property: "aria-pressed", equals: "false" },
  { type: "click", selector: ".chip" },
  { type: "assert", selector: "#probeCoords", property: "text", equals: "62,04° с.ш. · 129,68° в.д." },
  { type: "assert", selector: "#probePlace", property: "text", equals: "Якутск" },
  { type: "assert", selector: "#probeClass", property: "text", equals: "без осадков" }
];
fs.writeFileSync("actions.json", JSON.stringify(actions, null, 2));
console.log("ok");
