import companyModel from "./models/companies.js"
import { CompanyType, FiltersType, OptionalCompanyType } from "../types/company.js"

// Esta clase crea un objeto que manipula una colección en MongoDB con documentos dentro. Dichos documentos pueden ser agregados, modificados, borrados y consultados

class Container {
    model = companyModel

    constructor() {
        this.model = companyModel
    }

    async save(document: CompanyType) { // Recibe un documento, lo guarda en la colección, le coloca un id único y devuelve ese id
        const save_ = await this.model.create(document)
        return save_._id.valueOf()
    }
    
    async getAll(page: number, filter: FiltersType) { // Devuelve un array con todos los documentos presentes en la colección, de acuerdo a la página actual
        const elements_per_page = 10
        return await this.model.find(filter).skip(elements_per_page*(page-1)).limit(elements_per_page)
    }

    async updateById(id: string, documentoActualizado: OptionalCompanyType) { // Actualiza un documento de la colección según su id
        await this.model.updateOne({_id: id}, {$set: {...documentoActualizado}})
    }

    async deleteById(id: string) { // Elimina de la base de datos al documento con el id solicitado
        await this.model.deleteOne({_id: id})
    }
}

export default Container
