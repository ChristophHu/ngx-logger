import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { InjectionToken } from '@angular/core';

export enum Pubishername {
    CONSOLE = 'console',
    API = 'api',
    LOCALSTORAGE = 'localstorage',
}

export interface ILoggerPublisher {
    name: Pubishername
    location: string
    isActive: boolean
}
export interface ILoggerSettings {
    log_level: string
    log_date: boolean
    publisher?: ILoggerPublisher[]
}

export const NGX_LOGGER_SETTINGS_TOKEN = new InjectionToken<ILoggerSettings>('ngx-logger-settings', {
    factory: () => ({ log_level: '0', log_date: false, publisher: [] } as ILoggerSettings)
})

export function provideLogger(log: ILoggerSettings): EnvironmentProviders {
    console.log('provideLogger', log)
    return makeEnvironmentProviders([
        {
            provide: NGX_LOGGER_SETTINGS_TOKEN,
            useValue: log
        }
    ])
}