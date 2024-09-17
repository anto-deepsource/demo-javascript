const { sign } = require("jsonwebtoken");

const token = sign({ user: "xyz" }, key, { algorithm: "none" });
