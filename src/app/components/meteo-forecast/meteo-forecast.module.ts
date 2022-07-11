import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoForecastComponent } from './meteo-forecast.component';
import { UnitPipe } from '../../pipes/unit/unit.pipe';




@NgModule({
  declarations: [
    MeteoForecastComponent,
    UnitPipe,
  ],

  imports: [
    CommonModule,
  ],

  exports:[
    MeteoForecastComponent,
  ]
})
export class MeteoForecastModule { }
