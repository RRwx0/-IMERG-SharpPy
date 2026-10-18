const fs=require("fs");
fs.writeFileSync("a1.json", JSON.stringify([{type:"click",selector:"#play"}]));
fs.writeFileSync("a2.json", JSON.stringify({actions:[{type:"click",selector:"#play"}]}));
