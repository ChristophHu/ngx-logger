import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { provideLogger, Pubishername } from '../../../ngx-logger/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideLogger({ 
      log_level: '6', 
      log_date: true, 
      publisher: [{ 
        name: Pubishername.CONSOLE, 
        location: '', 
        isActive: true 
      }] 
    }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideMarkdown()
  ]
};
