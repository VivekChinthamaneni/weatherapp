import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import {WeatherData} from '../weatherData'

//defining it here as it is component-specific utility
@Pipe({
  name: 'selectInterval'
})
export class SelectIntervalPipe implements PipeTransform {
  transform(array: any[] | undefined, interval: number): any[] {
    if (!array) {
      return []; // Return an empty array if the input is undefined
    }
    return array.filter((_, index) => (index + 1) % interval === 0);
  }
}

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})

export class CityWeatherComponent implements OnInit {
  @Input() city?: string;
  weatherData: WeatherData | undefined;
  Math = Math;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = params.get('city')!;
      this.loadWeatherData();
    });
  }

  loadWeatherData() {
    this.weatherService.getCoordinates(this.city!).subscribe(data => {
      console.log(data)
      this.weatherData = data;

    });
  }

  getIconUrl(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  }

  convertToFahrenheit(temp: number): number {
    return (temp - 273.15) * 9/5 + 32;
  }

  roundAndMultiply(value: number): number {
    return Math.round(value * 100);
  }
}