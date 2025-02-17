import { Injectable } from '@angular/core';
import { LogService } from '../services/log.service';

@Injectable()
export class LogDecoratorService {

  constructor(private _logService: LogService) {
    
  }
}
