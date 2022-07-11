import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { CodeIconPipe } from './pipes/code-icon/code-icon.pipe';
// import { UnitPipe } from './pipes/unit/unit.pipe';
// import { MeteoForecastComponent } from './components/meteo-forecast/meteo-forecast.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { CitySearchModule } from './components/city-search/city-search.module';
import { MeteoForecastModule } from './components/meteo-forecast/meteo-forecast.module';



@NgModule({
  declarations: [
    AppComponent,
    // MeteoForecastComponent,
    // CodeIconPipe,
    // UnitPipe,
    // CitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MeteoForecastModule,
    CitySearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
