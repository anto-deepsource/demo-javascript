import vm from "vm";
const expressMiddleware = (req, res) => {
  const code = req.body.code;
  const context = vm.createContext({});
  vm.runInContext(code, context);
};
