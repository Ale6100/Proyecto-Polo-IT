const corsOptions = (whitelist) => {
    return {
        credentials: true,
        origin: whitelist,
        optionsSuccessStatus: 200
    };
};
export default corsOptions;
