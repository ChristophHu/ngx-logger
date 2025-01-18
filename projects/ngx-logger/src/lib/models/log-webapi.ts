import { HttpClient } from "@angular/common/http"
import { catchError, map, Observable, of, throwError } from "rxjs"
import { LogEntry } from "./log.entry"
import { LogPublisher } from "./log-publisher"

export class LogWebApi extends LogPublisher {
    constructor(private _httpClient: HttpClient) {
        super()
        
        this.location = "/api/log"
    }
    
    log(entry: LogEntry): Observable<boolean> {
        let options = { headers: { 'Content-Type': 'application/json' } }
        
        return this._httpClient.post(this.location, entry, options)
        .pipe(
            map((response: any) => {
                // response.json()
                console.log(response)
            }),
            catchError(this.handleErrors)
        )
    }
    
    clear(): Observable<boolean> {
        return of(true)
    }
    
    private handleErrors(error: any): Observable<any> {
        let errors: string[] = []
        let msg: string = ""
        
        msg = "Status: " + error.status
        msg += " - Status Text: " + error.statusText
        if (error) {
            msg += " - Exception Message: " + error.exceptionMessage
        }
        errors.push(msg)
        
        console.error('An error occurred', errors)
        return throwError(errors)
    }
}