import __dirname from "../utils.js";
import { Response, Request } from "express";
import Container from "../daos/Container.js";

const container = new Container()

const getAll = async (_req: Request, res: Response) => { // En /api/companies con el método GET se pueden traer todas las empresas
    const response = await container.getAll()
    res.send({ status: "success", payload: response })
}

const saveOne = async (req: Request, res: Response) => { // En /api/companies con el método PUT se puede agregar una empresa
    const { info, logo, video, linksSocialNetworks, website, mail } = req.body

    if (!info || !logo || !video || !linksSocialNetworks || !website || !mail) {
        req.logger.error("Incomplete values")
        return res.status(400).send({ status: "error", error: "Incomplete values" })
    }

    if (!Array.isArray(linksSocialNetworks)) {
        return res.status(400).send({ status: "error", error: "linksSocialNetworks must be an array" })
    }

    const newObject = {
        info,
        logo,
        video,
        linksSocialNetworks,
        website,
        mail
    }

    const response = await container.save(newObject)
    return res.send({ status: "success", payload: response })
}

export default {
    getAll,
    saveOne
}
