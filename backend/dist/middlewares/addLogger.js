import logger from "../utils/logger.js";
const addLogger = (req, _res, next) => {
    req.infoPeticion = `${new Date()} | Petición a la ruta '${req.url}' | Método ${req.method}`;
    req.logger = logger;
    req.logger.info(req.infoPeticion);
    next();
};
export default addLogger;
