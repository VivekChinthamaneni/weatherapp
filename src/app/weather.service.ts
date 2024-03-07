import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '482944e26d320a80bd5e4f23b3de7d1f';
  private geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getCoordinates(city: string): Observable<any> {
    const url = `${this.geoUrl}?q=${city}&limit=1&appid=${this.apiKey}`;
    return this.http.get<any[]>(url).pipe(
      switchMap(response => {
        if (!response || response.length === 0) {
          return throwError('No coordinates found for the specified city');
        }
        return this.getWeather(response[0].lat, response[0].lon);
      }),
      catchError(error => {
        console.error('Error in getCoordinates:', error);
        return throwError(error);
      })
    );
  }

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.weatherUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error in getWeather:', error);
        return throwError(error);
      })
    );
  }
}