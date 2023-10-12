import __dirname from "../utils.js";
import { Response, Request } from "express";

const base = (_req: Request, res: Response) => {
    res.send({ status: "success", message: "Bienvenido. No hay nada que ver aquí por el momento" })
}

export default {
    base
}
