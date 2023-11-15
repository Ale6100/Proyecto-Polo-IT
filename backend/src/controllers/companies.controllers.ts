import __dirname from "../utils.js";
import { Response, Request } from "express";
import Container from "../daos/Container.js";
import { FiltersType, OptionalCompanyType, TypeSocialNetwork } from "../types/company.js";

const container = new Container()

const saveOne = async (req: Request, res: Response) => { // En /api/companies con el método PUT se puede agregar una empresa
    const { name, info, logo, video, website, mail, linksSocialNetworks, bigdata, cloud, testing, softwarepropio, softwarepropioverticales, softwareterceros, softwaretercerosverticales, asesoriait, mantenimiento, actividadesexterior, capacitacion, consultoria } = req.body

    try {
        if (!name || !info || typeof logo === "undefined" || typeof video === "undefined" || !website || !mail || !linksSocialNetworks) {
            req.logger.error("Incomplete values")
            return res.status(400).send({ status: "error", error: "Incomplete values" })
        }

        if (typeof name !== "string" || typeof info !== "string" || typeof logo !== "string" || typeof video !== "string" || typeof website !== "string" || !Array.isArray(mail) || !Array.isArray(linksSocialNetworks) || typeof bigdata !== "boolean" || typeof cloud !== "boolean" || typeof testing !== "boolean" || typeof softwarepropio !== "boolean" || typeof softwarepropioverticales !== "boolean" || typeof softwareterceros !== "boolean" || typeof softwaretercerosverticales !== "boolean" || typeof asesoriait !== "boolean" || typeof mantenimiento !== "boolean" || typeof actividadesexterior !== "boolean" || typeof capacitacion !== "boolean" || typeof consultoria !== "boolean") {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }
    
        if (linksSocialNetworks.some((link: TypeSocialNetwork) => typeof link.url !== "string" || typeof link.name !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (mail.some((m: string) => typeof m !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        const newObject = {
            name,
            info,
            logo,
            video,
            website,
            mail,
            linksSocialNetworks,
            bigdata,
            cloud,
            testing,
            softwarepropio,
            softwarepropioverticales,
            softwareterceros,
            softwaretercerosverticales,
            asesoriait,
            mantenimiento,
            actividadesexterior,
            capacitacion,
            consultoria
        }
    
        const response = await container.save(newObject)
        return res.status(200).send({ status: "success", payload: response })        
    } catch (error) {
        req.logger.fatal(`${req.infoPeticion} | ${error}`)
        return res.status(500).send({ status: "error", error: error })         
    }
}

const getAll = async (req: Request, res: Response) => { // /api/companies:page con el método GET
    try {
        const { page } = req.params
        const { bigdata, cloud, testing, softwarepropio, softwarepropioverticales, softwareterceros, softwaretercerosverticales, asesoriait, mantenimiento, actividadesexterior, capacitacion, consultoria } = req.query
        
        const filters: FiltersType = {}

        if (bigdata === "false" || bigdata === "true") filters.bigdata = JSON.parse(bigdata)
        if (cloud === "false" || cloud === "true") filters.cloud = JSON.parse(cloud)
        if (testing === "false" || testing === "true") filters.testing = JSON.parse(testing)
        if (softwarepropio === "false" || softwarepropio === "true") filters.softwarepropio = JSON.parse(softwarepropio)
        if (softwarepropioverticales === "false" || softwarepropioverticales === "true") filters.softwarepropioverticales = JSON.parse(softwarepropioverticales)
        if (softwareterceros === "false" || softwareterceros === "true") filters.softwareterceros = JSON.parse(softwareterceros)
        if (softwaretercerosverticales === "false" || softwaretercerosverticales === "true") filters.softwaretercerosverticales = JSON.parse(softwaretercerosverticales)
        if (asesoriait === "false" || asesoriait === "true") filters.asesoriait = JSON.parse(asesoriait)
        if (mantenimiento === "false" || mantenimiento === "true") filters.mantenimiento = JSON.parse(mantenimiento)
        if (actividadesexterior === "false" || actividadesexterior === "true") filters.actividadesexterior = JSON.parse(actividadesexterior)
        if (capacitacion === "false" || capacitacion === "true") filters.capacitacion = JSON.parse(capacitacion)
        if (consultoria === "false" || consultoria === "true") filters.consultoria = JSON.parse(consultoria)

        let page_ = 1
        if (page) {
            page_ = parseInt(page)
        }

        const elements_per_page = 10
        const total_count = await container.count(filters)
        const total_pages = Math.ceil(total_count / elements_per_page)

        const response = await container.getAll(page_, filters, elements_per_page)
        return res.status(200).send({ status: "success", payload: response, total_pages })        
    } catch (error) {
        req.logger.fatal(`${req.infoPeticion} | ${error}`)
        return res.status(500).send({ status: "error", error: error })        
    }
}

const updateById = async (req: Request, res: Response) => { // En /api/companies/id con el método PUT se actualizan las propiedades una empresa según su id
    const { name, info, logo, video, website, mail, linksSocialNetworks, bigdata, cloud, testing, softwarepropio, softwarepropioverticales, softwareterceros, softwaretercerosverticales, asesoriait, mantenimiento, actividadesexterior, capacitacion, consultoria } = req.body
    const { id } = req.params

    try {
        if (typeof id !== "string") {
            req.logger.error("Parameter id must be a string")
            return res.status(400).send({ status: "error", error: "Parameter id must be a string" })
        }

        if ((name && typeof name !== "string") // Verifica que las propiedades que hayan sido enviadas tengan el tipado correcto
        || (info && typeof info !== "string")
        || ((logo || logo === "") && typeof logo !== "string")        
        || ((video || video === "") && typeof video !== "string")        
        || (website && typeof website !== "string")
        || (mail && !Array.isArray(mail))
        || (linksSocialNetworks && !Array.isArray(linksSocialNetworks))
        || (typeof bigdata !== "undefined" && typeof bigdata !== "boolean")
        || (typeof cloud !== "undefined" && typeof cloud !== "boolean")
        || (typeof testing !== "undefined" && typeof testing !== "boolean")
        || (typeof softwarepropio !== "undefined" && typeof softwarepropio !== "boolean")
        || (typeof softwarepropioverticales !== "undefined" && typeof softwarepropioverticales !== "boolean")
        || (typeof softwareterceros !== "undefined" && typeof softwareterceros !== "boolean")
        || (typeof softwaretercerosverticales !== "undefined" && typeof softwaretercerosverticales !== "boolean")
        || (typeof asesoriait !== "undefined" && typeof asesoriait !== "boolean")
        || (typeof mantenimiento !== "undefined" && typeof mantenimiento !== "boolean")
        || (typeof actividadesexterior !== "undefined" && typeof actividadesexterior !== "boolean")
        || (typeof capacitacion !== "undefined" && typeof capacitacion !== "boolean")
        || (typeof consultoria !== "undefined" && typeof consultoria !== "boolean")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (linksSocialNetworks && linksSocialNetworks.some((link: TypeSocialNetwork) => typeof link.url !== "string" || typeof link.name !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }

        if (mail && mail.some((m: string) => typeof m !== "string")) {
            req.logger.error("Incorrect values")
            return res.status(400).send({ status: "error", error: "Incorrect values" })
        }
        
        const newObj: OptionalCompanyType = {}

        if (name) newObj.name = name
        if (info) newObj.info = info
        if (logo || logo === "") newObj.logo = logo
        if (video || video === "") newObj.video = video
        if (website) newObj.website = website
        if (mail) newObj.mail = mail
        if (linksSocialNetworks) newObj.linksSocialNetworks = linksSocialNetworks
        if (bigdata) newObj.bigdata = bigdata
        if (cloud) newObj.cloud = cloud
        if (testing) newObj.testing = testing
        if (softwarepropio) newObj.softwarepropio = softwarepropio
        if (softwarepropioverticales) newObj.softwarepropioverticales = softwarepropioverticales
        if (softwareterceros) newObj.softwareterceros = softwareterceros
        if (softwaretercerosverticales) newObj.softwaretercerosverticales = softwaretercerosverticales
        if (asesoriait) newObj.asesoriait = asesoriait
        if (mantenimiento) newObj.mantenimiento = mantenimiento
        if (actividadesexterior) newObj.actividadesexterior = actividadesexterior
        if (capacitacion) newObj.capacitacion = capacitacion
        if (consultoria) newObj.consultoria = consultoria
    
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
