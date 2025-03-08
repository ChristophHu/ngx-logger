import { Inject, Injectable } from '@angular/core';
import { LogPublisher } from '../models/log-publisher';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogConsole } from '../models/log-console';
import { LogPublisherConfig } from '../models/log-publisher-config';
import { LogLocalStorage } from '../models/log-local-storage';
import { LogWebAPI } from '../models/log-webapi';
import { NGX_LOGGER_OPTIONS_TOKEN } from '../token/ngx-logger-options-token';
import { ILogOptions } from '../models/log-options';

@Injectable({
  providedIn: 'root'
})
export class LogPublisherService {

  private readonly _config: BehaviorSubject<LogPublisherConfig[]> = new BehaviorSubject<LogPublisherConfig[]>([])
  readonly config$: Observable<LogPublisherConfig[]> = this._config.asObservable()

  constructor(private _http: HttpClient, @Inject(NGX_LOGGER_OPTIONS_TOKEN) public options: ILogOptions) {
    this.buildPublishers()
  }

  logPublishers: LogPublisher[] = []

  buildPublishers() {
    let logPub: LogPublisher

    this.config$.subscribe((response: LogPublisherConfig[]) => {
      for (let pub of response.filter(p => p.isActive)) {
        switch (pub.loggerName.toLowerCase()) {
          case 'console':
            logPub = new LogConsole()
            break
          case 'sessionstorage':
            // logPub = new LogSessionStorage()
            break
          case 'localstorage':
            logPub = new LogLocalStorage()
          break
          case 'webapi':
            logPub = new LogWebAPI(this._http)
            logPub.location = pub.loggerLocation
            break
          default:
            console.log('No Logger to push.')
        }
        this.logPublishers.push(logPub)
      }
    })
  }

  setLogger(config: LogPublisherConfig) {
    this._config.next([...this._config.value, config])
  }
}
