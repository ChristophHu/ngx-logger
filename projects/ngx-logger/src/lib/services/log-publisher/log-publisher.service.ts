import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
// import { ConfigService } from '../../config/config.service'
import { LogPublisher } from '../../models/log-publisher'
import { LogConsole } from '../../models/log-console'
import { LogLocalStorage } from '../../models/log-local-storage'
import { LogWebApi } from '../../models/log-webapi'
// const PUBLISHERS_FILE = "/assets/log-publishers.json"

class LogPublisherConfig {
  loggerName: string = ''
  loggerLocation: string = ''
  isActive: boolean = false
}

@Injectable({
  providedIn: 'root'
})
export class LogPublisherService {
  constructor(private _httpClient: HttpClient) {
    // Build publishers arrays
    this.buildPublishers()
  }

  // Public properties
  publishers: LogPublisher[] = []

  // Build publishers array
  buildPublishers(): void {
    let logPub: LogPublisher
    
    this.getLoggers().subscribe(response => {
        for (let pub of response.filter(p => p.isActive)) {
            switch (pub.loggerName.toLowerCase()) {
                case "console":
                    logPub = new LogConsole()
                    break
                case "localstorage":
                    logPub = new LogLocalStorage()
                    break
                case "webapi":
                    logPub = new LogWebApi(this._httpClient)
                    break
            }
            
            // Set location of logging
            logPub.location = pub.loggerLocation
            
            // Add publisher to array
            this.publishers.push(logPub)
        }
    })
}

  getLoggers(): Observable<LogPublisherConfig[]> {
    return new Observable((observer) => {
      // const log_config = this._configService.get('log_config')
      // if (log_config) observer.next(log_config)
    })
    // return this._httpClient.get(PUBLISHERS_FILE)
    // .pipe(
    //   map((response: any) => {
    //     response.json()
    //   }),
    //   catchError(this.handleErrors)
    // )
  }

  private handleErrors(error: any): Observable<any> {
    let errors: string[] = []
    let msg: string = ""
    
    msg = "Status: " + error.status
    msg += " - Status Text: " + error.statusText
    // if (error.json()) {
    //     msg += " - Exception Message: " + error.json().exceptionMessage
    // }
    errors.push(msg)
    console.error('An error occurred', errors)
    return throwError(errors)
  }
}
