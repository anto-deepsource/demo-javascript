const jwt = require("jsonwebtoken");

const token = jwt.sign({ user: "xyz" }, key, { algorithm: "none" });
