import { Component, OnInit } from '@angular/core';
import { Subscription, filter, map, take, tap } from 'rxjs';
import { FetchdataService } from 'src/app/services/fetchdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myData$: any;
  myData: any;
  private subscription: Subscription | undefined;

  constructor(private dataService: FetchdataService, private router: Router) { }

  // initialize data fetched
  ngOnInit(): void {
    this.myData$ = this.dataService.getData().pipe(

      tap((data) => {
        this.myData = data;
        console.log("Inspecting data", data)
      }),

    ).subscribe();

  }

  // Unsubscribe when component is destroyed
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  /**
   * Delete product by ID from DB
   * @param productId 
   */
  deleteProduct(productId: number) {
    this.dataService.deleteProductByID(productId).subscribe(
      (response: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        console.log("Product successfully deleted");
      },
      (error) => {
        console.log("Failed to delete product", error);
      }
    );
  }


}
