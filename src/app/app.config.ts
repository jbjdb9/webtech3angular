import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routeConfig } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideHttpClient()]
};
