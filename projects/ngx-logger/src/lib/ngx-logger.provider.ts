import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import {InjectionToken} from '@angular/core';

export interface ILoggerSettings {
    log_level: string
    log_date: boolean
    log_location: string
    api_endpoints: string
}

export const NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN = new InjectionToken<ILoggerSettings>('ngx-logger-settings', {
    factory: () => ({ log_level: '0', log_date: false, log_location: '', api_endpoints: '' } as ILoggerSettings)
})

export function provideLogger(log: ILoggerSettings): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: NGX_GOOGLE_ANALYTICS_SETTINGS_TOKEN,
            useValue: log
        }
    ])
}