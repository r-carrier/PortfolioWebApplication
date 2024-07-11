import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {RouterModule} from "@angular/router";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CardModule,
    RouterModule,
    PanelModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
