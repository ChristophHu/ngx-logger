import { Component } from '@angular/core';
import { LogDecorator, LoggerToggleComponent, LogPublisherService, LogService } from '../../../ngx-logger/src/public-api';
import { DebugModeComponent } from './shared/components/debug-mode/debug-mode.component';

@Component({
  selector: 'app-root',
  imports: [
    DebugModeComponent,
    LoggerToggleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  constructor(private readonly _logService: LogService, private _logPublisherService: LogPublisherService) {
    this._logPublisherService.setLogger({ loggerName: 'console', loggerLocation: '', isActive: false })
    this._logPublisherService.setLogger({ loggerName: 'localstorage', loggerLocation: 'log', isActive: false })
    this._logPublisherService.setLogger({ loggerName: 'webapi', loggerLocation: 'http://localhost:3000/log', isActive: true })

    LogService.debug(this.constructor.name, 'AppComponent constructor debug')
    LogService.log(this.constructor.name, 'AppComponent constructor log')
    LogService.info(this.constructor.name, 'AppComponent constructor info')
    LogService.warn(this.constructor.name, 'AppComponent constructor warn')
    LogService.error(this.constructor.name, 'AppComponent constructor error')
    LogService.fatal(this.constructor.name, 'AppComponent constructor fatal')
  }

  @LogDecorator({ logType: 'info', input: true, output: true, timestamp: true })
  logToggle(param: any): boolean {
    
    this._logService.toggleLogActivate()
    return true
  }
}
