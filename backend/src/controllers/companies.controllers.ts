import __dirname from "../utils.js";
import { Response, Request } from "express";
import Container from "../daos/Container.js";
import { OptionalCompanyType } from "../types/company.js";

const container = new Container()

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
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (linksSocialNetworks.some(link => typeof link.url !== "string" || typeof link.name !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
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

const getAll = async (req: Request, res: Response) => { // En /api/companies con el método GET se pueden traer todas las empresas
    try {
        const response = await container.getAll()
        return res.status(200).send({ status: "success", payload: response })        
    } catch (error) {
        req.logger.fatal(`${req.infoPeticion} | ${error}`)
        return res.status(500).send({ status: "error", error: error })        
    }
}

const updateById = async (req: Request, res: Response) => { // En /api/companies/id con el método PUT se actualizan las propiedades una empresa según su id
    const { info, logo, video, linksSocialNetworks, website, mail } = req.body    
    const { id } = req.params

    try {
        if (typeof id !== "string") {
            req.logger.error("Parameter id must be a string")
            return res.status(400).send({ status: "error", error: "Parameter id must be a string" })
        }

        if ((info && typeof info !== "string") // Verifica que las propiedades que hayan sido enviadas tengan el tipado correcto
        || (logo && typeof logo !== "string")
        || (video && typeof video !== "string")
        || (website && typeof website !== "string")
        || (mail && typeof mail !== "string")
        || (linksSocialNetworks && !Array.isArray(linksSocialNetworks))) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }
        
        const newObj: OptionalCompanyType = {}

        if (info) newObj.info = info
        if (logo) newObj.logo = logo
        if (video) newObj.video = video
        if (website) newObj.website = website
        if (mail) newObj.mail = mail
        if (linksSocialNetworks) newObj.linksSocialNetworks = linksSocialNetworks 

    
        await container.updateById(id, newObj)
        return res.status(200).send({ status: "success", message: "Correctly updated" })        
    } catch (error) {
        req.logger.fatal(`${req.infoPeticion} | ${error}`)
        return res.status(500).send({ status: "error", error: error })         
    }
}

const deleteById = async (req: Request, res: Response) => { // En /api/companies/id con el método DELETE se elimina una empresa según su id
    const { id } = req.params

    try {
        if (!id) {
            req.logger.error("Incomplete values")
            return res.status(400).send({ status: "error", error: "Incomplete values" })
        }

        if (typeof id !== "string") {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

    
        await container.deleteById(id)
        return res.status(200).send({ status: "success", message: "Correctly removed" })        
    } catch (error) {
        req.logger.fatal(`${req.infoPeticion} | ${error}`)
        return res.status(500).send({ status: "error", error: error })         
    }
}

export default {
    saveOne,
    getAll,
    updateById,
    deleteById
}
