import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  private readonly BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search?name='

  constructor(private http: HttpClient) { }

  getCities(searchString: string){
    const url = this.BASE_URL + searchString;
    return this.http.get<any>(url).pipe(
      map(data => data.results)
    )
  }
}
