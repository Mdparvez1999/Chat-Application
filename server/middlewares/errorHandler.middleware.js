const errorHandler = (err, req, res, next) => {
    if (err.name === "TokenExpiredError") {
        err = handleTokenExpiredError();
    } else if (err.name === "JsonWebTokenError") {
        err = handleJsonWebTokenError();
    }
    errorResult(err, res);
};

const handleTokenExpiredError = () => {
    let msg = "Session expired, please login again";
    return new AppError(401, msg);
};

const handleJsonWebTokenError = () => {
    let msg = "You are not authorized to access this page";
    return new AppError(401, msg);
};

const errorResult = (err, res) => {
    if (err.isOperational) {
        return res.status(err.statusCode).json({
            status: err.status,
            error: err.message
        })
    } else {
        return res.status(500).json({
            status: "error",
            error: "internal server error"
        })
    }
};

export default errorHandler;