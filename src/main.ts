/// <reference types="@angular/localize" />

/*import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  */
  import { provideRouter } from '@angular/router';
  import routeConfig from './app/routes';
  import { bootstrapApplication } from "@angular/platform-browser";
  import { RootComponent } from './app/components/root/root.component';
  import { HomeComponent } from "./app/components/home/home.component";
  import { provideHttpClient } from '@angular/common/http';
  bootstrapApplication(RootComponent, {
    providers: [provideRouter(routeConfig), provideHttpClient()],
  });
 