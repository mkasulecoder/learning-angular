import { Component } from '@angular/core';
import { DayGeneratorService } from 'src/app/services/day-generator.service';

@Component({
  selector: 'app-day-of-week',
  templateUrl: './day-of-week.component.html',
  styleUrls: ['./day-of-week.component.css']
})
export class DayOfWeekComponent {

  time = this.dateService.getTimeOfDay();
  day = this.dateService.getDayOfWeek();
  month = this.dateService.getMonthOfYear();
  year = this.dateService.getYear();


  constructor(private dateService: DayGeneratorService) { }

}
