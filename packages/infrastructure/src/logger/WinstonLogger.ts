import { ILogger } from '@skeleton/core';
import winston from 'winston';

export class WinstonLogger implements ILogger {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: process.env.LOG_LEVEL || 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.errors({ stack: true }),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console({
                    format: winston.format.simple(),
                })
            ]
        });
    }

    info(message: string, meta?: Record<string, any>): void {
        this.logger.info(message, meta);
    }
    error(message: string, meta?: Record<string, any>): void {
        this.logger.error(message, meta);
    }
    warn(message: string, meta?: Record<string, any>): void {
        this.logger.warn(message, meta);
    }
    debug(message: string, meta?: Record<string, any>): void {
        this.logger.debug(message, meta);
    }
}
