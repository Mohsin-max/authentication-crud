import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private router:Router){}

  isPasswordVissiable: boolean = false;
  errorMessage:boolean = false;

  toggelPasswordVisiablity() {

    this.isPasswordVissiable = !this.isPasswordVissiable
  }

  adminLoginForm = new FormGroup({

    "password": new FormControl('', [Validators.required])

  })

  get password(){

    return this.adminLoginForm.controls['password'];

  }

  adminLogin(){

    if (this.adminLoginForm.value.password === "admin") {
      
      
      sessionStorage.setItem("isAdminLoggedIn","true");
      sessionStorage.setItem("userRole","admin");

      this.router.navigate(['/admin'])
      this.adminLoginForm.reset();
      
      
    } else {
      
      this.errorMessage = true
      
      setTimeout(() => {

        this.errorMessage = false
        this.adminLoginForm.reset();
        
      }, 3000);
    }
    
    
  }
}
