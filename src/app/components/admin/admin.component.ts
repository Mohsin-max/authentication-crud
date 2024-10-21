import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{


  constructor(private service:ProductService){}

  allProducts:any;
  emptyMessage:boolean = true
  productLength:number = 0


  ngOnInit(): void {
    

    this.getAllProducts();
    this.deleteProductMethod


  }


  getAllProducts(){

    this.service.getProduct().subscribe((result)=>{
      
      this.allProducts = result.reverse()
      
      if (result[0]) {
        
        this.productLength = result.length
        
        this.emptyMessage = false

      } else {
        this.emptyMessage = true
      }

      

    })

  }

  deleteProductMethod(productId : any){

    if (confirm("Are you sure want to delete?")) {

      this.service.deleteProduct(productId).subscribe((result)=>{

        if (result) {
          this.getAllProducts()
        } else {
          
        }
        
  
      })
    } else {
      
    }

  }

}
