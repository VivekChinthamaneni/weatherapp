import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {
  transform(value: any, format: string = 'EEEE, MMMM d'): string | null {
    if (!value) {
      return null;
    }

    const datePipe = new DatePipe('en-US');
    let dateFormatted = datePipe.transform(value, format);

    if (dateFormatted) {
      return `${dateFormatted}${this.getOrdinal(new Date(value).getDate())}`;
    } else {
      return null;
    }
  }

  private getOrdinal(n: number): string {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
}