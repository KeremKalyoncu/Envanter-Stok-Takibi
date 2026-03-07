import { Request, Response, NextFunction } from 'express';
import { AppError, ILogger } from '@skeleton/core';

export const errorHandler = (logger: ILogger) => {
    return (err: Error, req: Request, res: Response, next: NextFunction) => {
        logger.error('Unhandled Exception', { error: err.message, stack: err.stack });

        if (err instanceof AppError) {
            res.status(err.statusCode).json({
                status: 'error',
                message: err.message
            });
            return;
        }

        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    };
};
