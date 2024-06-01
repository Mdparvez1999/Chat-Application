class AppError extends Error {
    constructor(message, statusCode, isOperational = true, status = "error") {
        super(message);

        this.statusCode = statusCode;

        this.message = message;

        this.isOperational = isOperational;

        this.status = status;
    }
};

export default AppError;