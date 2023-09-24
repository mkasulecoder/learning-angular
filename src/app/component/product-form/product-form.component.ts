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
    productName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    price: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    description: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    gender: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    purchases: new FormControl('', Validators.required),
    discount: new FormControl('', Validators.required),
  });

  // get all fetch methods
  ngOnInit(): void {

  }

}
