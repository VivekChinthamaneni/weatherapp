import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityWeatherComponent } from './city-weather/city-weather.component';

const routes: Routes = [
  { path: 'weather/:city', component: CityWeatherComponent },
  { path: '', redirectTo: '/weather/peshawar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }