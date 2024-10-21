import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }

  allProducts: any;
  emptyMessage: boolean = true
  showPagination: boolean = false
  p: number = 1
  pSize: number = 10
  totalProducts: number = 0

  category: string = "All";

  filterProducts: any;

  ngOnInit(): void {


    this.service.getProduct().subscribe((result) => {


      this.allProducts = result.reverse();

      this.filterProductsByCategory();

      // this.totalProducts = result.length



      // if (this.allProducts[0]) {
      //   this.emptyMessage = false
      // } else {

      //   this.emptyMessage = true

      // }

    })

  }

  addCart(product: any) {

    let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');

    cart.push(product);

    sessionStorage.setItem('cart', JSON.stringify(cart))



  }


  filterProductsByCategory() {

    if (this.category === "All") {

      this.filterProducts = this.allProducts

    } else {

      this.filterProducts = this.allProducts.filter((p: any) => p.productCategory === this.category)

    }

    this.totalProducts = this.filterProducts.length;

    this.emptyMessage = this.filterProducts.length === 0;

  }

}
