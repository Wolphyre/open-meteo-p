import { Component, OnInit } from '@angular/core';
import { HourlyForecast } from 'src/app/model/daily-forecast';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-meteo-forecast',
  templateUrl: './meteo-forecast.component.html',
  styleUrls: ['./meteo-forecast.component.scss']
})
export class MeteoForecastComponent implements OnInit {

  forecastArray: HourlyForecast[] = [];

  constructor(private meteoS: MeteoService) { }

  ngOnInit(): void {
    this.meteoS.getMeteoForecast().subscribe({
      next: (data) => this.forecastArray = data,
      error: (err) => console.log(err)
    });
  }

}
