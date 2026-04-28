import { createLogger, format, transports } from 'winston';
import { dirname, resolve } from 'path';
import { Logger } from 'winston';

const logDirectory = resolve(dirname(__filename), 'logs');

const logger: Logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new transports.File({
            filename: `${logDirectory}/error.log`,
            level: 'error',
            maxsize: 5242880,
            maxFiles: '5d',
        }),
        new transports.File({
            filename: `${logDirectory}/combined.log`,
            maxsize: 5242880,
            maxFiles: '5d',
        }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.simple(),
    }));
}

export default logger;