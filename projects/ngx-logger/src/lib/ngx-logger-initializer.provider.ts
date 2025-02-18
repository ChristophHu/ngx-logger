import { inject, provideAppInitializer, Provider } from "@angular/core";
import { NGX_LOGGER_OPTIONS_TOKEN } from "./token/ngx-logger-options-token";
import { ILogOptions } from "./models/log-options";

export const NGX_LOGGER_INITIALIZER_PROVIDER: Provider = [
    provideAppInitializer(() => LoggerInitializer(inject(NGX_LOGGER_OPTIONS_TOKEN)))
]

export function LoggerInitializer(options: ILogOptions): Promise<void> {
    return new Promise<void>((resolve) => {
      
    //   if (!settings.tag) {
    //     if (!isDevMode()) {
    //       console.error('Empty tracking code for Google Analytics. Make sure to provide one when initializing NgxGoogleAnalyticsModule.');
    //     }
  
    //     return;
    //   }
  
    //   if (!gtag) {
    //     if (!isDevMode()) {
    //       console.error('Was not possible create or read gtag() fn. Make sure this module is running on a Browser w/ access to Window interface.');
    //     }
  
    //     return;
    //   }
  
    //   if (!document) {
    //     if (!isDevMode()) {
    //       console.error('Was not possible to access Document interface. Make sure this module is running on a Browser w/ access do Document interface.');
    //     }
    //   }
  
    //   // Set default ga.js uri
    //   settings.uri = settings.uri || `https://www.googletagmanager.com/gtag/js?id=${settings.tag}`;
  
    //   // these commands should run first!
    //   settings.initCommands = settings?.initCommands ?? [];
  
    //   // assert config command
    //   if (!settings.initCommands.find(x => x.command === 'config')) {
    //     settings.initCommands.unshift({ command: 'config', values: [ settings.tag ] });
    //   }
  
    //   // assert js command
    //   if (!settings.initCommands.find(x => x.command === 'js')) {
    //     settings.initCommands.unshift({ command: 'js', values: [ new Date() ] });
    //   }
  
    //   for (const command of settings.initCommands) {
    //     gtag(command.command, ...command.values);
    //   }
  
    //   const s: HTMLScriptElement = document.createElement('script');
    //   s.async = true;
    //   s.src = settings.uri;
  
    //   if (settings.nonce) {
    //     s.setAttribute('nonce', settings.nonce);
    //   }
  
    //   const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
    //   head.appendChild(s);
      resolve();
    });
}