import winston from 'winston';
import path from 'path';

export const logMessage = (message) => {
  const filename = path.join(`${process.cwd()}/output/logs`, 'services.log');

  //
  // Create a new winston logger instance with two tranports: Console, and File
  //
  //
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename }),
    ],
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.prettyPrint(),
    ),
  });

  logger.log('info', message);
};
