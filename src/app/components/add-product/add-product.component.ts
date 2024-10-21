import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor(private service: ProductService, private router: Router) { }

  addProductForm = new FormGroup({

    "productName": new FormControl('', [Validators.required]),
    "productPrice": new FormControl('', [Validators.required]),
    "productCategory": new FormControl(null, [Validators.required]),

  });

  get productName() {

    return this.addProductForm.controls['productName'];

  }


  get productPrice() {

    return this.addProductForm.controls['productPrice'];

  }

  selectedFile: string | ArrayBuffer = ""

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.selectedFile = reader.result as string; // Base64 string milta hai
    };

    reader.readAsDataURL(file); // File ko Base64 mein convert karna
  }

  addProductFormSubmit() {

    const productData = {

      productName: this.addProductForm.value.productName,
      productPrice: this.addProductForm.value.productPrice,
      productCategory: this.addProductForm.value.productCategory,
      productImage: this.selectedFile
    }

    this.service.postProduct(productData as unknown as Product).subscribe((result) => {

      if (result) {

        console.log(result);
        

        this.router.navigate(['/admin']);
        this.addProductForm.reset()

      } else {
        console.error(result);

      }


    })


  }
}
