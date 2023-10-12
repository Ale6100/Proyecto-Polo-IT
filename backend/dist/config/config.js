import dotenv from "dotenv";
dotenv.config();
export default {
    nodemailer: {
        user: process.env["NODEMAILER_USER"],
        pass: process.env["NODEMAILER_PASS"]
    },
    site: {
        urlfrontend1: process.env["URL_FRONTEND1"],
        urlfrontend2: process.env["URL_FRONTEND2"],
        urlfrontend3: process.env["URL_FRONTEND3"],
    },
    token: {
        gral: process.env["TOKEN_GRAL"]
    }
};
