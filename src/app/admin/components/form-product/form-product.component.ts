import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { finalize} from 'rxjs/operators';

import { MyValidators } from './../../../utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';
import { from, Observable } from 'rxjs';





@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

   form!: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,

  )
   {
     this.buildForm();
    }

  ngOnInit(): void {
  }

  saveProduct(event: Event ){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product).then(() => {
        console.log('producto registrado con exito')
        this.router.navigate(['./admin/products']);
      }).catch(error => {
        console.log(error)
      })

    }
  
  }
 



   private buildForm() {
     this.form = this.formBuilder.group({
       id: ['', [Validators.required]],
       title:  ['', [Validators.required]],
       price:  ['', [Validators.required, MyValidators.isPriceValid]],
       image: '',
       description:  ['', [Validators.required]],
     });
   }

   get priceField(){
     return this.form.get('price');
   }


}
