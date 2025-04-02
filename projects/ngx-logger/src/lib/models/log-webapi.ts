import { catchError, map, Observable, of, tap } from "rxjs"
import { LogEntry } from "./log-entry"
import { LogPublisher } from "./log-publisher"
import { HttpClient } from "@angular/common/http"

export class LogWebAPI extends LogPublisher {

    constructor(private _httpClient: HttpClient) {
        super()
        this.location = '' // "http://localhost:3000/log", "http://localhost:7246/insert"
    }

    log(entry: LogEntry): Observable<boolean> {
        let options = { headers: { 'Content-Type': 'application/json' } }        
        this._httpClient.post(this.location, { id: "1", data: JSON.stringify(entry) }, options) // entry
        .pipe(
            tap(response => console.log(response)),
            catchError((error: any) => {
                console.error(error)
                return of(false)
            })
        ).subscribe()

        return of(true)
    }
    
    clear(): Observable<boolean> {
        return of(true)
    }
}