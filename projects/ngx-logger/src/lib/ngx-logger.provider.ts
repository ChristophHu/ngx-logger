import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { NGX_LOGGER_OPTIONS_TOKEN } from './token/ngx-logger-options-token'
import { NGX_LOGGER_INITIALIZER_PROVIDER } from './ngx-logger-initializer.provider'
import { ILogOptions } from './models/log-options'

export function provideLogger(options: ILogOptions): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: NGX_LOGGER_OPTIONS_TOKEN,
            useValue: options
        },
        NGX_LOGGER_INITIALIZER_PROVIDER
    ])
}