import nodemailer from "nodemailer";
import config from "../config/config.js";
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.nodemailer.user,
        pass: config.nodemailer.pass
    }
});
const sendMail = async (objConf) => {
    const { from, to, subject, html, attachments } = objConf;
    try {
        await transport.sendMail({
            from: `<${from}>`,
            to: to,
            subject: subject,
            html: html,
            attachments: attachments
        });
        return "success";
    }
    catch (error) {
        return error;
    }
};
export default sendMail;
