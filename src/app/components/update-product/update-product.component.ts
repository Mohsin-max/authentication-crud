import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router) { }

  singleProduct: any;
  updateMessage: boolean = false;

  ngOnInit(): void {

    let productId = this.route.snapshot.paramMap.get("id");

    this.service.getProductById(productId).subscribe((result) => {

      this.singleProduct = result;


    })

  }

  updateProduct() {

    this.service.updateProduct(this.singleProduct.id, this.singleProduct).subscribe((result) => {

      if (result) {

        this.updateMessage = true

        setTimeout(() => {

          this.updateMessage = false

          this.router.navigate(['/admin'])

        }, 3000);


      } else {

      }


    })


  }
}
