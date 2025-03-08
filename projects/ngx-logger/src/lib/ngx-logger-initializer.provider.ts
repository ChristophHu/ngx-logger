import { inject, provideAppInitializer, Provider } from "@angular/core"
import { NGX_LOGGER_OPTIONS_TOKEN } from "./token/ngx-logger-options-token"
import { ILogOptions } from "./models/log-options"
import { LogPublisherService } from "./services/log-publisher.service"

export const NGX_LOGGER_INITIALIZER_PROVIDER: Provider = [
    provideAppInitializer(() => LoggerInitializer(inject(NGX_LOGGER_OPTIONS_TOKEN)))
]

export function LoggerInitializer(options: ILogOptions): Promise<void> {

  const logPublisherService = inject(LogPublisherService); // Inject the service
  logPublisherService.setLogger({ loggerName: options.default_logger, loggerLocation: options.default_location, isActive: options.isActive })

  return new Promise<void>((resolve) => {
    resolve()
  })
}