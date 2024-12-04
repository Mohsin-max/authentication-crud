import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // public baseUrl = "http://localhost:3000/products";
  public baseUrl = "https://gainful-stealth-neon.glitch.me/products";

  postProduct(productData: Product): Observable<Product> {

    return this.http.post<Product>(this.baseUrl, productData)

  }

  getProduct(): Observable<Product[]> {

    return this.http.get<Product[]>(this.baseUrl)

  }

  getProductById(id: any): Observable<Product> {

    return this.http.get<Product>(`${this.baseUrl}/${id}`)

  }

  updateProduct(id: any, updatedProduct: any): Observable<Product> {

    return this.http.put<Product>(`${this.baseUrl}/${id}`, updatedProduct)

  }

  deleteProduct(productId: any): Observable<any> {

    return this.http.delete<any>(`${this.baseUrl}/${productId}`)

  }


  deleteAllProducts(): Observable<any> {
    return this.http.delete(`${this.baseUrl}`); // DELETE request to the API
  }

  category:any;

}
