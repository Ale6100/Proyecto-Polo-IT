import companyModel from "./models/companies.js"
import { CompanyType, CompanyTypeInMongo } from "../../types/company"

// Esta clase crea un objeto que manipula una colección en MongoDB con documentos dentro. Dichos documentos pueden ser agregados, modificados, borrados y consultados

class Container {
    model = companyModel

    constructor() {
        this.model = companyModel
    }

    async getAll() { // Devuelve un array con todos los documentos presentes en la colección
        return await this.model.find({})
    }

    async save(document: CompanyType) { // Recibe un documento, lo guarda en la colección, le coloca un id único y devuelve ese id
        const save_ = await this.model.create(document)
        return save_._id.valueOf()
    }

    async getById(id: string) { // Recibe un id y devuelve el documento con ese id, o null si no está
        const document = await this.model.findOne({_id: id})
        return document
    }

    async deleteById(id: string) { // Elimina de la base de datos al documento con el id solicitado
        await this.model.deleteOne({_id: id})
    }

    async deleteAll() { // Vacía la colección
        await this.model.deleteMany({})
    }

    async update(documentoActualizado: CompanyTypeInMongo, id: string) { // Actualiza un documento de la colección según su id (reemplaza al anterior por el nuevo)
        await this.model.updateOne({_id: id}, {$set: {...documentoActualizado}})
    }
}

export default Container
