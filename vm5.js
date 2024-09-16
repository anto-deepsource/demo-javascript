import execa from "execa";
console.log("aaa");
const middleWare = (req, res) => {
  const x = "ls " + req.body.args;
  execa.command(x);
};
