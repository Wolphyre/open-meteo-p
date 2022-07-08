import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HourlyForecast } from 'src/app/model/daily-forecast';
import { MeteoService } from 'src/app/services/meteo/meteo.service';


@Component({
  selector: 'app-meteo-forecast',
  templateUrl: './meteo-forecast.component.html',
  styleUrls: ['./meteo-forecast.component.scss']
})
export class MeteoForecastComponent implements OnInit {

  forecastArray: HourlyForecast[] = [];

  constructor(private meteoS: MeteoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['latlng']) {
      const latlng = this.route.snapshot.params['latlng'];
      const lat = latlng.split('@')[0];
      const lng = latlng.split('@')[1];
      this.meteoS.getMeteoForecast(lat, lng).subscribe({
        next: (data) => this.forecastArray = data,
        error: (err) => console.log(err)
      });
    }
  }

}
