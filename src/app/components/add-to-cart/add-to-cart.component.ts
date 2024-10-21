import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  totalPrice: number = 0;
  emptyMessage: boolean = true;
  cartItem: any;

  ngOnInit(): void {

    this.cartItem = JSON.parse(sessionStorage.getItem('cart') || '[]').reverse();


    this.findTotalPrice();
    this.cartEmpty();

  }


  cartEmpty() {
    if (this.cartItem.length > 0) {

      this.emptyMessage = false

    } else {

      this.emptyMessage = true


    }
  }

  findTotalPrice() {

    this.totalPrice = this.cartItem.reduce((total: any, item: { productPrice: any; }) => total + item.productPrice, 0);


  }

  deleteCartItem(index: number) {

    this.cartItem.splice(index, 1)

    sessionStorage.setItem('cart', JSON.stringify(this.cartItem))
    this.findTotalPrice();
    this.cartEmpty();

  }


}
