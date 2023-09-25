import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayGeneratorService {

  day = new Date();

  constructor() { }

  getTimeOfDay() {
    return this.day.getHours() + ":" + this.day.getMinutes() + ":" + this.day.getSeconds();
  }

  getDayOfWeek() {
    return this.day.getDay();
  }


  getMonthOfYear() {
    return this.day.getMonth();
  }

  getYear() {
    return this.day.getFullYear();
  }

}
