import { Component, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { FetchdataService } from 'src/app/services/fetchdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myData$: any;
  myData: any;
  private subscription: Subscription | undefined;

  constructor(private dataService: FetchdataService) { }

  // initialize data fetched
  ngOnInit(): void {
    this.myData$ = this.dataService.getData().pipe(tap((data) => this.myData = data)).subscribe();
    console.warn("Test", this.myData);
  }

  // Unsubscribe when component is destroyed
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
