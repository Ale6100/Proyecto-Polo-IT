import express from "express";
import cors from "cors";
import corsOptions from "./middlewares/cors.js";
import addLogger from "./middlewares/addLogger.js";
import validateToken from "./middlewares/validateToken.js";
import config from "./config/config.js";
import logger from "./utils/logger.js";
import baseRouter from "./routes/base.routes.js";
import mailRouter from "./routes/mail.routes.js";
const app = express();
const PORT = process.env["PORT"] || 8080;
const server = app.listen(PORT, () => {
    const address = server.address();
    if (typeof address === "object" && address !== null) {
        logger.info(`Servidor escuchando en el puerto ${address.port}`);
    }
});
server.on("error", error => logger.fatal(`${error}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const whitelist = [];
if (config.site.urlfrontend1)
    whitelist.push(config.site.urlfrontend1);
if (config.site.urlfrontend2)
    whitelist.push(config.site.urlfrontend2);
if (config.site.urlfrontend3)
    whitelist.push(config.site.urlfrontend3);
if (whitelist.length === 0) {
    logger.fatal("Debes colocar al menos una url frontend en las variables de entorno! Visita https://github.com/Ale6100/Curso-backend#despliegue-");
    throw new Error(`Debes colocar al menos una url frontend en las variables de entorno! Visita https://github.com/Ale6100/Curso-backend#despliegue-`);
}
app.use(cors(corsOptions(whitelist)));
app.use(addLogger);
app.use(validateToken);
app.use("/", baseRouter);
app.use("/api/mail", mailRouter);
