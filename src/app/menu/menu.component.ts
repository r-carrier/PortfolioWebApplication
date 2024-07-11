import {Component, OnInit} from '@angular/core';
import {MenuItem, MenuItemCommandEvent} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {RouterModule} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    MenubarModule,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'About Me',
        icon: 'pi pi-home',
        routerLink: '/about-me'
      },
      {
        label: 'Fishing Weather',
        icon: 'pi pi-cloud',
        routerLink: '/fishing-weather'
      },
      {
        label: 'Resume',
        icon: 'pi pi-file-pdf',
        routerLink: '/resume'
      },
      {
        label: 'Projects',
        icon: 'pi pi-github',
        items: [
          {
            label: 'Lambda',
            items: [
              {
                label: 'RealtimeWeather',
                url: 'https://github.com/r-carrier/LambdaRealtimeWeather'
              },
              {
                label: 'WeatherForecast',
                url: 'https://github.com/r-carrier/LambdaWeatherForecast'
              }
            ]
          },
          {
            label: 'Java 17',
            items: [
              {
                label: 'PortfolioApplication',
                url: 'https://github.com/r-carrier/Portfolio'
              }
            ]
          }
            ]
      },
      {
        label: 'LinkedIn',
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/in/robert-carrier-65573895/'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
  }

}
