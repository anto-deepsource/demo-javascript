const vm = require("vm");

app.post("/exec", (req, res) => {
  const code = req.body.code;
  vm.run(code);
});

const expressMiddleware = (req, res) => vm.run(req.body.code);

app.get((req, res) => vm.runInThisContext(req.params.code));
