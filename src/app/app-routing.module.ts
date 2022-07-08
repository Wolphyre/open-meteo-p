import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { MeteoForecastComponent } from './components/meteo-forecast/meteo-forecast.component';

const routes: Routes = [
  {path:'search', component: CitySearchComponent},
  {path:'meteo/:latlng', component: MeteoForecastComponent},
  {path:'', redirectTo: '/search', pathMatch: 'full'},
  {path:'**', redirectTo: '/search'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
