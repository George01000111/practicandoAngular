import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import   { Product }  from './../../../core/models/product.model';
import { ProductsService } from './../../../core/services/products/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

   products!: Product[];

   displayedColumns: string[] = ['id', 'title', 'price','actions'];


  constructor(
    private ProductsServices: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.ProductsServices.getAllProducts()
    .subscribe( products1 => {
      console.log(products1);
     this.products = products1;
    });
  }

  deleteProduct(id: string){
    // this.ProductsServices.deleteProduct(id)
    // .subscribe(rta => {
    //  this.fetchProducts();
    // });
  }

}
