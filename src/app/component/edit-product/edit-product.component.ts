import { Component, OnInit } from '@angular/core';
import { FetchdataService } from 'src/app/services/fetchdata.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private productID: any;

  constructor(private windowRoute: Router, private router: ActivatedRoute, private dataService: FetchdataService) { }
  ngOnInit(): void {
    const routerParams = this.router.snapshot.paramMap;
    this.productID = Number(routerParams.get('productId'));

    this.dataService.getProductById(this.productID).subscribe(
      (response: any) => {
        console.log("Found current product", response);

        this.editProductForm.patchValue({
          productName: response.productName,
          productImage: response.productImage,
          price: response.price,
          description: response.description,
          size: response.size,
          gender: response.gender,
          purchases: response.purchases,
          discount: response.discount,
        });
      },
      (error) => {
        console.error("Error", error);
      }
    );
  }


  editProductForm = new FormGroup({
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
    return this.editProductForm.get("productName");
  }

  get price(): any {
    return this.editProductForm.get("price");
  }
  get productImage(): any {
    return this.editProductForm.get("productImage");
  }

  get description(): any {
    return this.editProductForm.get("description");
  }

  get size(): any {
    return this.editProductForm.get("size");
  }

  get gender(): any {
    return this.editProductForm.get("gender");
  }

  get purchases(): any {
    return this.editProductForm.get("purchases");
  }

  get discount(): any {
    return this.editProductForm.get("discount");
  }

  editProduct() {
    this.dataService.updateCurrentProduct(this.editProductForm.value, this.productID).subscribe(
      (response) => {
        console.log("Product updated", response);
        console.log("Product ID updated", this.productID);
      },
      (error) => {
        console.log("Failed to update", error);
      }
    );
  }

  onSubmit() {
    // Call editProduct here to ensure that this.productID is set
    this.editProduct();
    setTimeout(() => {
      this.windowRoute.navigateByUrl('/');
    }, 3000);
  }

}
