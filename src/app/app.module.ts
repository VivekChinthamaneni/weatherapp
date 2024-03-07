import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CityWeatherComponent, SelectIntervalPipe } from './city-weather/city-weather.component';
import { WeatherService } from './weather.service';
import { TabViewModule } from 'primeng/tabview';
import { AppRoutingModule } from './app-routing.module';
import { CustomDateFormatPipe } from './custom-date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponent,
    SelectIntervalPipe,
    CustomDateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    TabViewModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }