import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {

  constructor(private router: Router, private productService: ProductService) { }

  adminLogout() {

    sessionStorage.removeItem("isAdminLoggedIn")

    this.router.navigate(['/admin-login'])

  }

  deleteAll() {
    
    this.productService.deleteAllProducts().subscribe((response) => {
      console.log('All products deleted', response);
      // Refresh the product list or take any other action
    }, error => {
      console.error('Error deleting products', error);
    });
  }

}
