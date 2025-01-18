import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { provideLogger } from '../../../ngx-logger/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideLogger({ log_level: '0', log_date: true, log_location: '', publisher: [] }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideMarkdown()
  ]
};
