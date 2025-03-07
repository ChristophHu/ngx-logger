import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DebugModeComponent } from '../../shared/components/debug-mode/debug-mode.component';
import { LogDecorator, LoggerToggleComponent, LogPublisherService, LogService } from 'ngx-logger';
import { LogPipe } from '../../../../../ngx-logger/src/lib/pipes/log.pipe';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-overview',
  imports: [
    CommonModule,
    DebugModeComponent,
    LoggerToggleComponent,
    LogPipe,
    // JsonPipe
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass'
})
export class OverviewComponent {
  
  /**
   * @description
   * This is a variable to demonstrate the LogPipe.
   * @type {string}
   */
  variable: string = 'LogPipe!'

  constructor(private readonly _logService: LogService, private _logPublisherService: LogPublisherService) {
    // this._logPublisherService.setLogger({ loggerName: 'console', loggerLocation: '', isActive: false })
    // this._logPublisherService.setLogger({ loggerName: 'localstorage', loggerLocation: 'log', isActive: false })
    // this._logPublisherService.setLogger({ loggerName: 'webapi', loggerLocation: 'http://localhost:3000/log', isActive: true })

    // LogService.debug(this.constructor.name, 'AppComponent constructor debug')
    // LogService.log(this.constructor.name, 'AppComponent constructor log')
    // LogService.info(this.constructor.name, 'AppComponent constructor info')
    // LogService.warn(this.constructor.name, 'AppComponent constructor warn')
    // LogService.error(this.constructor.name, 'AppComponent constructor error')
    // LogService.fatal(this.constructor.name, 'AppComponent constructor fatal')
  }

  @LogDecorator({ logType: 'info', input: true, output: true, timestamp: true })
  logToggle(param: any): boolean {
    this._logService.toggleLogActivate()
    this._logService.loge('AppComponent', 'logToggle', 'LogService toggleLogActivate')
    return true
  }
}
