import mongoose from "mongoose";

const collection = 'companies'; // Nombre de la colección a manipular
const schema = new mongoose.Schema({ // Estructura que tendrá cada documento
    name: {
        type: String,
        required: true
    },
    
    info: {
        type: String,
        required: true
    },

    logo: {
        type: String,
        required: true
    },

    video: {
        type: String,
        default: ""
    },

    website: {
        type: String,
        required: true,
    },

    mail: {
        type: [
            {
                type: String,
                required: false
            }
        ],
        required: true, 
    },

    linksSocialNetworks: {
        type: [
            {
                type: Object,
                required: false
            }
        ],
        required: true,
    },

    bigdata: {
        type: Boolean,
        required: true
    },

    cloud: {
        type: Boolean,
        required: true
    },

    testing: {
        type: Boolean,
        required: true
    },

    softwarepropio: {
        type: Boolean,
        required: true
    },
    
    softwarepropioverticales: {
        type: Boolean,
        required: true
    },

    softwareterceros: {
        type: Boolean,
        required: true
    },

    softwaretercerosverticales: {
        type: Boolean,
        required: true
    },

    asesoriait: {
        type: Boolean,
        required: true
    },

    mantenimiento: {
        type: Boolean,
        required: true
    },
    
    actividadesexterior: {
        type: Boolean,
        required: true
    },
    
    capacitacion: {
        type: Boolean,
        required: true
    },

    consultoria: {
        type: Boolean,
        required: true
    }
})

const companyModel = mongoose.model(collection, schema);

export default companyModel;
