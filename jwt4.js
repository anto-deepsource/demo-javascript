import { sign } from "jsonwebtoken";

const token = sign({ user: "xyz" }, key, { algorithm: "none" });
