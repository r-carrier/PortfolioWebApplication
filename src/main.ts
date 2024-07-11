import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Will need to modify this to use appConfig and add providers to app config instead
import { AppComponent } from './app/app.component';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {provideHttpClient} from "@angular/common/http";

bootstrapApplication(
  AppComponent,
  {providers: [provideAnimations(), provideRouter(routes), provideHttpClient()]}
)
  .catch((err) => console.error(err));
