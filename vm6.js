const execa = require("execa");
console.log("aaa");
app.get("/exec/:bar", (req, res) => {
  execa.command(req.params.bar);
});
