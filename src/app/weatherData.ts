interface Forecast {
    dt_txt: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
    wind: {
      speed: number;
    };
    pop: number;
    rain?: {
        '3h': number;
    }
  }
  
  export interface WeatherData {
    list: Forecast[];
    // ... other properties you expect from the API
  }