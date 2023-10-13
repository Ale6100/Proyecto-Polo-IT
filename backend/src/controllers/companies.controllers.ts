import __dirname from "../utils.js";
import { Response, Request } from "express";
import Container from "../daos/Container.js";

const container = new Container()

const getAll = async (req: Request, res: Response) => { // En /api/companies con el método GET se pueden traer todas las empresas
    try {
        const response = await container.getAll()
        return res.status(200).send({ status: "success", payload: response })        
    } catch (error) {
        req.logger.fatal(`${req.infoPeticion} | ${error}`)
        return res.status(500).send({ status: "error", error: error })        
    }
}

const saveOne = async (req: Request, res: Response) => { // En /api/companies con el método PUT se puede agregar una empresa
    const { info, logo, video, linksSocialNetworks, website, mail } = req.body

    try {
        if (!info || !logo || !video || !linksSocialNetworks || !website || !mail) {
            req.logger.error("Incomplete values")
            return res.status(400).send({ status: "error", error: "Incomplete values" })
        }

        if (typeof info !== "string" || typeof logo !== "string" || typeof video !== "string" || typeof website !== "string" || typeof mail !== "string") {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }
    
        if (!Array.isArray(linksSocialNetworks)) {
            req.logger.error("linksSocialNetworks must be an array of strings")
            return res.status(400).send({ status: "error", error: "linksSocialNetworks must be an array of strings" })
        }

        if (linksSocialNetworks.some(link => typeof link !== "string")) {
            req.logger.error("linksSocialNetworks must be an array of strings")
            return res.status(400).send({ status: "error", error: "linksSocialNetworks must be an array of strings" })
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
        return res.status(200).send({ status: "success", payload: response })        
    } catch (error) {
        req.logger.fatal(`${req.infoPeticion} | ${error}`)
        return res.status(500).send({ status: "error", error: error })         
    }
}

export default {
    getAll,
    saveOne
}
