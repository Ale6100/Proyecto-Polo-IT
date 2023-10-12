import config from "../config/config.js";
const validateToken = (req, res, next) => {
    var _a, _b;
    if (req.path === "/" && (req.method === "GET" || req.method === "HEAD"))
        return next();
    const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[0]) === "Bearer" && ((_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1]);
    if (token === config.token.gral) {
        next();
    }
    else {
        req.logger.error(`${req.infoPeticion} | Forbidden | Token de acceso inválido`);
        res.status(403).send({ status: "error", "error": 'Forbidden | Token de acceso inválido' });
    }
};
export default validateToken;
