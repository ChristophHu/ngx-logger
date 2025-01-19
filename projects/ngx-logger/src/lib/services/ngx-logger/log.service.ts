import { Injectable } from '@angular/core';
import { LogPublisher } from '../../models/log-publisher';
import { LogPublisherService } from '../log-publisher/log-publisher.service';
import { LogEntry } from '../../models/log.entry';

export enum LogLevel {
  All,
  Debug,
  Info,
  Warn,
  Error,
  Fatal,
  Off
}

@Injectable({
  providedIn: 'root'
})
export class LogService {
  static logLevel  : LogLevel = LogLevel.All
  static isLogDate : boolean = true
  static publisher : LogPublisher[]

  constructor(private _publisherService: LogPublisherService) {
    LogService.publisher = this._publisherService.publishers
    // LogService.logLevel = this._configService.get('log_level')
    // LogService.isLogDate = this._configService.get('log_date')
  }

  static log(component: string, ...optionalParams: any[]): void {
    this.logger(LogLevel.Info, component, optionalParams)
  }

  static info(component: string, ...optionalParams: any[]): void {
    this.logger(LogLevel.Info, component, optionalParams)
  }

  static debug(component: string, ...optionalParams: any[]): void {
    this.logger(LogLevel.Debug, component, optionalParams)
  }

  static warn(component: string, ...optionalParams: any[]): void {
    this.logger(LogLevel.Warn, component, optionalParams)
  }

  static error(component: string, ...optionalParams: any[]): void {
    this.logger(LogLevel.Error, component, optionalParams)
  }

  static fatal(component: string, ...optionalParams: any[]): void {
    this.logger(LogLevel.Fatal, component, optionalParams)
  }

  static logger(level: LogLevel, component: string, content: any[]) {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry()
      entry.component = component
      entry.level = level
      entry.content = content
      entry.logWithDate = this.isLogDate

      if (LogService.publisher) {
        for (let logger of LogService.publisher) {
          logger.log(entry).subscribe((response: boolean) => {
            
          })
        }
      }
    }
  }

  static shouldLog(level: LogLevel): boolean {
    let ret: boolean = false
    if ((level >= this.logLevel && level !== LogLevel.Off) || this.logLevel === LogLevel.All) {
        ret = true
    }
    return ret
  }
}
