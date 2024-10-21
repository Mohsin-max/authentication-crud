import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private router:Router,private service:ProductService){}

  cartItem:any;
  messageShow:boolean = false

  searchText:any;

  ngOnInit(): void {
    
    this.cartBadge();
    
  }
  
  search(){
    
    // this.service.category = this.searchText

    console.log(this.searchText,"header");
    


  }

  cartBadge(){

    this.cartItem = JSON.parse(sessionStorage.getItem('cart') || '[]')

    if (this.cartItem.length > 0) {
      
      this.messageShow = true;

    } else {
      
    }
    

  }

logoutUser() {

  sessionStorage.removeItem("isLoggedIn")

  this.router.navigate(['/login'])

}

}
