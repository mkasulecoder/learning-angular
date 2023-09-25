import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../../services/fetchdata.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  //private subscribe: Subscription;

  constructor(private dataService: FetchdataService) { }

  productsForm = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    productImage: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    purchases: new FormControl('', Validators.required),
    discount: new FormControl('', Validators.required),
  });

  // Create form control methods
  get productName(): any {
    return this.productsForm.get("productName");
  }

  get price(): any {
    return this.productsForm.get("price");
  }
  get productImage(): any {
    return this.productsForm.get("productImage");
  }

  get description(): any {
    return this.productsForm.get("description");
  }

  get size(): any {
    return this.productsForm.get("size");
  }

  get gender(): any {
    return this.productsForm.get("gender");
  }

  get purchases(): any {
    return this.productsForm.get("purchases");
  }

  get discount(): any {
    return this.productsForm.get("discount");
  }

  // get all fetch methods
  ngOnInit(): void {
    // N/A
  }

  onSubmit() {
    // add new product
    this.createNewProduct();
    console.warn("new product", this.productsForm.value);
  }

  /**
     * Handling the HTTP Response: When you make a POST request using 
     * Angular's HttpClient, it returns an Observable.
     *  To perform an action upon the completion of the HTTP request 
     * (e.g., showing a success message or navigating to a different page), 
     * you should subscribe to the Observable. 
     * In your onSubmit method, you need to subscribe to the createNewProduct 
     * method like this:
     */
  createNewProduct() {
    this.dataService.createNewProduct(this.productsForm.value).subscribe(
      // if successful
      (response) => {
        console.log("Product added successfully", response);
        // We can re-route to home with http router.navigateByUrl, etc
      },

      //if error
      (error) => {
        console.log("Error in adding product", error);
      }

    );
  }

}
