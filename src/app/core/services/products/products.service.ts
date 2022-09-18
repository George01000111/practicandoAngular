import { Injectable } from '@angular/core';

import { Product } from './../../models/product.model';

import { environment } from './../../../../environments/environment';

import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {




  constructor(
    private fire: Firestore
  ) { }

  getAllProducts():Observable<Product[]>{
    const productRef = collection(this.fire, 'productos');
    return collectionData(productRef) as Observable<Product[]>;
  }

  getProduct(id: string){
   // return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product){
//return this.http.post(`${environment.url_api}/products`, product);
   const productRef = collection(this.fire, 'productos');
   return addDoc(productRef, product); 
  }
  
  updateProduct(id: string, changes: Partial<Product>){
    //return this.http.put(`${environment.url_api}/products/${id}`,changes)
  }
  
   deleteProduct(id: string) {
     //return this.http.delete(`${environment.url_api}/products/${id}`);
    }

}
