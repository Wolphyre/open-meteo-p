import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HourlyForecast } from '../model/daily-forecast';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private readonly URL = 'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,pressure_msl,rain,weathercode,cloudcover,windspeed_10m,winddirection_10m&latitude=41.8955&longitude=12.4823'

  constructor(private http: HttpClient) { }

  getMeteoForecast() {
    return this.http.get<HourlyForecast[]>(this.URL).pipe(
      map (data => this.parseMeteoData(data))
    );
  }

  parseMeteoData(data: any) {
    const temperatureArray = data.hourly.temperature_2m;
    const timeArray = data.hourly.time;
    const humidityArray = data.hourly.relativehumidity_2m;
    const rainArray = data.hourly.rain;
    const pressureArray = data.hourly.pressure_msl;
    const cloudCoverArray = data.hourly.cloudcover;
    const windSpeedArray = data.hourly.windspeed_10m;
    const windDirectionArray = data.hourly.winddirection_10m;
    const weatherCodeArray = data.hourly.weathercode;

    const forecastArray: HourlyForecast[] = [];

    for (let i = 0; i < temperatureArray.length; i++) {
      const temperature = temperatureArray[i];
      const time = timeArray[i];
      const humidity = humidityArray[i];
      const rain = rainArray[i];
      const pressure = pressureArray[i];
      const cloudCover = cloudCoverArray[i];
      const windSpeed = windSpeedArray[i];
      const windDirection = windDirectionArray[i];
      const weatherCode = weatherCodeArray[i];

      const forecast: HourlyForecast = {
        date: time,
        temperature: temperature,
        humidity:humidity,
        rain: rain,
        pressure: pressure,
        cloudCover: cloudCover,
        windSpeed: windSpeed,
        windDirection: windDirection,
        code: weatherCode
      };

      forecastArray.push(forecast);
    }

    return forecastArray;



    // return data.hourly.time.map((time:string, index: number) => {
    //   return {date: time, temperature: data.hourly.temperature_2m[index]}
    // });
  }


}
