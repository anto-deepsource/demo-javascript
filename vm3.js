import vm_ from "vm";
const f = (req, res) => vm_.run(req.body.code);
