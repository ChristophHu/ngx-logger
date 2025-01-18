import { LogEntry } from "./log.entry"
import { Observable, of } from "rxjs"

import { LogPublisher } from "./log-publisher"
import { LogLevel } from "../services/log.service"

export class LogConsole extends LogPublisher {
    log(entry: LogEntry): Observable<boolean> {
        switch (entry.level) {
            case LogLevel.Debug:
                console.debug(entry.buildLogString())
                break
            case LogLevel.Warn:
                console.warn(entry.buildLogString())
                break
            case LogLevel.Error:
            case LogLevel.Fatal:
                console.error(entry.buildLogString())
                break
            default:
                console.log(entry.buildLogString())
                break
        }
        return of(true)
    }
    
    clear(): Observable<boolean> {
        return of(true)
    }
}