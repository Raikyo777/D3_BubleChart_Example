import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

const CONFIG = {
  N : 50,
  SPECTRUM: [
    "rgb(0,60,113)",
    // "rgb(0,82,154)",
    "rgb(0,94,176)",
    // "rgb(0,106,197)",
    "rgb(0,116,217)",
    // "rgb(38,137,223)",
    "rgb(77,158,228)",
    "rgb(128,186,236)",
    "rgb(176,212,243)",
    // "rgb(222,237,250)",
  ]
}

export default CONFIG;

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
