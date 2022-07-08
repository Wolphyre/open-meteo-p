import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { GeocodingService } from 'src/app/services/geocoding/geocoding.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  cities: City[] = [];

  constructor(private geoS: GeocodingService) { }

  ngOnInit(): void {
  }

  getCities(searchString: string){
    this.geoS.getCities(searchString).subscribe({
      next: data => this.cities = data,
      error: err => console.log(err)
    })
  }

}
