import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';


import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {

  providers: [

    provideRouter(routes),


    // NgRx Store
    provideStore(),


    // NgRx Effects
    provideEffects(),


    // Redux DevTools
    provideStoreDevtools({

      maxAge: 25

    })

  ]

};