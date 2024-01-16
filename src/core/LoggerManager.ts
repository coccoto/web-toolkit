import winston, { Logger, LogEntry } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file'

const transports = (): winston.transport[] => {
    switch (process.env.ENVIRONMENT) {
        case 'development':
            return [
                new winston.transports.Console(),
                new DailyRotateFile({
                    filename: process.env.LOG_DIR + '/%DATE%.log',
                    datePattern: 'YYYY-MM',
                }),
            ]
        case 'production':
            return [
                new DailyRotateFile({
                    filename: process.env.LOG_DIR + '/%DATE%.log',
                    datePattern: 'YYYY-MM',
                }),
            ]
        default:
            throw new Error("[ERROR] Invalid environment. env['ENVIRONMENT']: " + process.env.ENVIRONMENT);
    }
}

const LoggerManager: Logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.printf((info: LogEntry) => {
            return JSON.stringify(info)
        }),
    ),
    transports: transports()
})

export default LoggerManager