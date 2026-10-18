const fs=require("fs");
const r=JSON.parse(fs.readFileSync("dmrl-sakha-radar-verify/report.json","utf8"));
console.log("status",r.status,"network",r.network,"interactions",r.interactions);
r.issues.filter(x=>!/broken image|blocked resource/.test(x)).forEach(x=>console.log("ISSUE:",x.slice(0,200)));
