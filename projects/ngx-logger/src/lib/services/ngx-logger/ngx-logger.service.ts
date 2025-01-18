import { Injectable } from '@angular/core';

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
export class NgxLoggerService {

  constructor() { }
}
