import sendMail from "../services/mailingService.js";
const send = async (req, res) => {
    const { from, to, subject, html, attachments } = req.body;
    if (!from || !to || !subject || !html) {
        req.logger.error(`${req.infoPeticion} | Incomplete values`);
        return res.status(400).send({ status: "error", error: "Valores incompletos" });
    }
    const response = await sendMail({
        from,
        to,
        subject,
        html,
        attachments: attachments
    });
    if (response === "success") {
        return res.status(200).send({ status: "success", message: "Enviado" });
    }
    else {
        req.logger.fatal(`${req.infoPeticion} | ${response}`);
        return res.status(500).send({ status: "error", error: response });
    }
};
export default {
    send
};
