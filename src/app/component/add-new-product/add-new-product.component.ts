import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { productList } from '../../productList';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {

  constructor() { }

  addProductForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });

  addNote() {
    let title = this.addProductForm.value.title ?? '';
    let text = this.addProductForm.value.text ?? '';

    if (this.addProductForm.valid) {
      let ids = productList.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newNote = {
        id: maxId + 1,
        title: title,
        text: text,
      };
      productList.unshift(newNote);
      this.addProductForm.reset();
    }
  }

}
