export const tryCatch = (controller) => {
    return async (req, res, next) => {
        try {
            controller(req, res, next);
        } catch (error) {
            return next(error)
        }
    }
}

export default tryCatch;