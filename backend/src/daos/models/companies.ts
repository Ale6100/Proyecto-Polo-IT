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

    linksSocialNetworks: {
        type: [
            {
                type: Object,
                required: false
            }
        ],
        required: true,
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
        required: false, 
    },

    category: {
        type: [
            {
                type: String,
                required: false
            }
        ],
        required: true
    },

    productOrService: {
        type: [
            {
                type: String,
                required: false
            }
        ],
        required: true
    }
})

const companyModel = mongoose.model(collection, schema);

export default companyModel;
