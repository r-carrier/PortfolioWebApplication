import { Routes } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ContactComponent} from "./contact/contact.component";
import {ResumeComponent} from "./resume/resume.component";
import {FishingWeatherComponent} from "./fishing-weather/fishing-weather.component";

export const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fishing-weather', component: FishingWeatherComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', redirectTo: '/about-me', pathMatch: 'full' }
];
