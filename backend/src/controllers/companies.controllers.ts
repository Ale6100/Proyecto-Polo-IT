import __dirname from "../utils.js";
import { Response, Request } from "express";
import Container from "../daos/Container.js";
import { OptionalCompanyType, TypeSocialNetwork } from "../types/company.js";

const container = new Container()

const saveOne = async (req: Request, res: Response) => { // En /api/companies con el método PUT se puede agregar una empresa
    const { name, info, logo, video, linksSocialNetworks, website, mail, category, productOrService } = req.body

    try {
        if (!name || !info || !logo || typeof video === "undefined" || !linksSocialNetworks || !website || !mail || !category || !productOrService) {
            req.logger.error("Incomplete values")
            return res.status(400).send({ status: "error", error: "Incomplete values" })
        }

        if (typeof name !== "string" || typeof info !== "string" || typeof logo !== "string" || typeof video !== "string" || !Array.isArray(linksSocialNetworks) || typeof website !== "string" || typeof mail !== "string" || !Array.isArray(category) || !Array.isArray(productOrService)) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }
    
        if (linksSocialNetworks.some((link: TypeSocialNetwork) => typeof link.url !== "string" || typeof link.name !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (category.some((cat: string) => typeof cat !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (productOrService.some((ps: string) => typeof ps !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        const newObject = {
            name,
            info,
            logo,
            video,
            linksSocialNetworks,
            website,
            mail,
            category,
            productOrService
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
    const { name, info, logo, video, linksSocialNetworks, website, mail, category, productOrService } = req.body    
    const { id } = req.params

    try {
        if (typeof id !== "string") {
            req.logger.error("Parameter id must be a string")
            return res.status(400).send({ status: "error", error: "Parameter id must be a string" })
        }

        if ((name && typeof name !== "string") // Verifica que las propiedades que hayan sido enviadas tengan el tipado correcto
        || (info && typeof info !== "string")
        || (logo && typeof logo !== "string")
        || ((video || video === "") && typeof video !== "string")
        || (linksSocialNetworks && !Array.isArray(linksSocialNetworks))        
        || (website && typeof website !== "string")
        || (mail && typeof mail !== "string")
        || (category && !Array.isArray(category))
        || (productOrService && !Array.isArray(productOrService))) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (linksSocialNetworks && linksSocialNetworks.some((link: TypeSocialNetwork) => typeof link.url !== "string" || typeof link.name !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (category && category.some((cat: string) => typeof cat !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (productOrService && productOrService.some((ps: string) => typeof ps !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }
        
        const newObj: OptionalCompanyType = {}

        if (name) newObj.name = name
        if (info) newObj.info = info
        if (logo) newObj.logo = logo
        if (video || video === "") newObj.video = video
        if (linksSocialNetworks) newObj.linksSocialNetworks = linksSocialNetworks
        if (website) newObj.website = website
        if (mail) newObj.mail = mail
        if (category) newObj.category = category
        if (productOrService) newObj.productOrService = productOrService
    
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
        if (typeof id !== "string") {
            req.logger.error("Parameter id must be a string")
            return res.status(400).send({ status: "error", error: "Parameter id must be a string" })
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
