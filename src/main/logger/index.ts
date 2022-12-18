import path from 'path'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import { app } from 'electron'

const LOG_PATH = app.getPath('logs')
const LOG_LEVEL = app.isPackaged ? 'info' : 'debug'

const prettyJson = winston.format.printf((info) => {
  if (info.message.constructor === Object)
    info.message = JSON.stringify(info.message, null, 4)

  return `${info.level}: ${info.message}`
})

const transport = {
  console: new winston.transports.Console({
    // handleExceptions: true,
    // handleRejections: true,
    level: LOG_LEVEL,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.prettyPrint(),
      winston.format.splat(),
      winston.format.simple(),
      prettyJson,
    ),
  }),
  file_main: new DailyRotateFile({
    filename: path.join(LOG_PATH, 'main-logs-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    maxFiles: '28d',
    handleExceptions: true,
    handleRejections: true,
    level: LOG_LEVEL,
    format: winston.format.combine(
      winston.format.timestamp({ format: 'HH:mm:ss' }),
      winston.format.printf((info) => `${info.level} ${info.timestamp} : ${info.message}`),
    ),
  }),
  file_renderer: new DailyRotateFile({
    filename: path.join(LOG_PATH, 'renderer-logs-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    maxFiles: '28d',
    handleExceptions: true,
    handleRejections: true,
    level: LOG_LEVEL,
    format: winston.format.combine(
      winston.format.timestamp({ format: 'HH:mm:ss' }),
      winston.format.printf((info) => `${info.level} ${info.timestamp} : ${info.message}`),
    ),
  }),
}

export const logger = winston.createLogger({
  transports: app.isPackaged
    ? [transport.file_main]
    : [transport.console, transport.file_main],
  exitOnError: false,
})

export const rendererLogger = winston.createLogger({
  transports: app.isPackaged
    ? [transport.file_renderer]
    : [transport.console, transport.file_renderer],
  exitOnError: false,
})
