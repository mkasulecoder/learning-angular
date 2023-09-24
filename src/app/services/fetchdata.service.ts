import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  private baseURL = "http://localhost:8080/api/v1/products"

  constructor(private http: HttpClient) {
  }

  /**
   * Fetches all data from DB/endpoint
   * @returns all products
   */
  getData() {
    return this.http.get(`${this.baseURL}/all`);
  }

  /**
   * Adds new product to the list of products
   * @param newProduct 
   * @returns response status
   */
  createNewProduct(newProduct: any) {
    return this.http.post(`${this.baseURL}/add-new-product`, newProduct);
  }

  /**
   * Update a new product by its ID in the DB
   * @param currentProductId
   * @param currentProduct
   * @return response
   */
  updateCurrentProduct(currentProduct: any, currentProductId: number) {
    return this.http.put(`${this.baseURL}/update-product/currentProductId`, currentProduct);
  }

  /**
   * Delete a product by its ID in the DB
   * @param productId 
   * @returns response status
   */
  deleteProductByID(productId: number) {
    return this.http.delete(`${this.baseURL}/delete-product/productId`);
  }



}
