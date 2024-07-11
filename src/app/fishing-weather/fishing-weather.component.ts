import {Component, OnInit} from '@angular/core';
import {FishingWeatherService} from "./fishing-weather.service";
import {DataViewModule} from "primeng/dataview";
import {TagModule} from "primeng/tag";
import {NgClass, NgForOf} from "@angular/common";
import {Button} from "primeng/button";
import {Product} from "./product";

@Component({
  selector: 'app-fishing-weather',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    NgForOf,
    NgClass,
    Button
  ],
  templateUrl: './fishing-weather.component.html',
  styleUrl: './fishing-weather.component.scss'
})
export class FishingWeatherComponent implements OnInit {

  products!: Product[];
  data: any;

  constructor(
    private fishingWeatherService: FishingWeatherService
  ) {
  }

  ngOnInit(): void {
    this.getRealtimeWeather();
    this.fishingWeatherService.getProducts().then((productData) => (this.products = productData.slice(0, 5)));
  }


  getRealtimeWeather(): void {
    this.fishingWeatherService.getRealtimeWeather().subscribe(
      response => this.data = response,
      error => console.error('Error fetching data', error)
    );
  }

    getSeverity (product: Product) {
      switch (product.inventoryStatus) {
        case 'INSTOCK':
          return 'success';

        case 'LOWSTOCK':
          return 'warning';

        case 'OUTOFSTOCK':
          return 'danger';

        default:
          return 'warning';
      }
    };

}
