import winston from 'winston';

declare global {
    interface MyReq {
        infoPeticion: string;
        logger: winston.Logger;
    }

    namespace Express {
        interface Request extends MyReq {} // El Request de Express también incluye la interfaz MyReq
    }
}
