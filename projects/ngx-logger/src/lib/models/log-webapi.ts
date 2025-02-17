import { map, Observable, of } from "rxjs"
import { LogEntry } from "./log-entry"
import { LogPublisher } from "./log-publisher"
import { LogLevel } from "./log-level.enum"
import { HttpClient } from "@angular/common/http"

export class LogWebAPI extends LogPublisher {

    constructor(private _httpClient: HttpClient) {
        super()
        this.location = "http://localhost:3000/log"
    }

    log(entry: LogEntry): Observable<boolean> {
        let options = { headers: { 'Content-Type': 'application/json' } }
        
        this._httpClient.post(this.location, entry, options)
        .pipe(
            // catchError((error: any) => {
            //     console.error(error)
            //     return of(false)
            // })
        ).subscribe()

        return of(true)
    }
    
    clear(): Observable<boolean> {
        return of(true)
    }
}