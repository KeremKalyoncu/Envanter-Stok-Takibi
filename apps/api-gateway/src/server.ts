import express from 'express';
import { env } from '@skeleton/config/src/env';
import { WinstonLogger } from '@skeleton/infrastructure/src/logger/WinstonLogger';
import { DatabaseWrapper } from '@skeleton/infrastructure/src/db/DatabaseWrapper';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const logger = new WinstonLogger();
const db = new DatabaseWrapper();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', env: env.NODE_ENV });
});

// Register global error handler
app.use(errorHandler(logger));

const server = app.listen(env.PORT, async () => {
    logger.info(`API Gateway listening on port ${env.PORT}`);
    await db.connect();
});

// Graceful Shutdown Handler
const shutdown = async () => {
    logger.info('Shutting down gracefully...');
    server.close(async () => {
        logger.info('HTTP server closed.');
        await db.disconnect();
        process.exit(0);
    });

    setTimeout(() => {
        logger.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
