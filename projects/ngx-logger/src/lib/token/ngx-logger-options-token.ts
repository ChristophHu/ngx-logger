import { InjectionToken } from '@angular/core'
import { ILogOptions } from '../models/log-options'

/**
 * Provide an Injection Token for global settings.
 */
export const NGX_LOGGER_OPTIONS_TOKEN = new InjectionToken<ILogOptions>('ngx-logger-options-token', {
    factory: () => ({ default_logger: 'console', default_location: '', isActive: false })
})