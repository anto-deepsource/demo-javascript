import jwt from "jsonwebtoken";

const token = jwt.sign({ user: "xyz" }, key, { algorithm: "none" });
