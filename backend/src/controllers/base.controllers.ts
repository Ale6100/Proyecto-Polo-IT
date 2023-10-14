import __dirname from "../utils.js";
import { Response, Request } from "express";

const base = (_req: Request, res: Response) => {
    res.send({ status: "success", message: "Bienvenido a nuestro backend. Este es el único endpoint accesible" })
}

export default {
    base
}
