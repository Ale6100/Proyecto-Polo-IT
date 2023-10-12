import mongoose from "mongoose";

const collection = 'companies'; // Nombre de la colección a manipular
const schema = new mongoose.Schema({ // Estructura que tendrá cada documento
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
        required: true
    },

    linksSocialNetworks: {
        type: [String],
        required: true,
    },

    website: {
        type: String,
        required: true,
    },

    mail: {
        type: String,
        required: false, 
    }
})

const companyModel = mongoose.model(collection, schema);

export default companyModel;
