import __dirname from "../utils.js";
import sendMail from "../services/mailingService.js";
import { Request, Response } from "express";

const send = async (req: Request, res: Response) => { // En /api/mail con el método POST, se envía un mail usando los datos pasados en el body
    const { from, to, subject, html, attachments } = req.body

    if (!from || !to || !subject || !html) {
        req.logger.error(`${req.infoPeticion} | Incomplete values`)
        return res.status(400).send({ status: "error", error: "Incomplete values" })
    }

    if (typeof from !== "string" || typeof to !== "string" || typeof subject !== "string" || typeof html !== "string") {
        req.logger.error(`${req.infoPeticion} | Incorrect values`)
        return res.status(400).send({ status: "error", error: "Incorrect values" })
    }

    if (attachments && !Array.isArray(attachments)) {
        req.logger.error(`${req.infoPeticion} | Attachments must be an array`)
        return res.status(400).send({ status: "error", error: "Attachments must be an array" })
    }

    const response = await sendMail({
        from,
        to,
        subject,
        html,
        attachments: attachments
    })

    if (response === "success") {
        return res.status(200).send({ status: "success", message: "Email sent successfully" })
    
    } else {
        req.logger.fatal(`${req.infoPeticion} | ${response}`)
        return res.status(500).send({ status: "error", error: response })
    }
}

export default {
    send
}
