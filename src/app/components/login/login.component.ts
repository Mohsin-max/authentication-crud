import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {


  }

  isPasswordVisiable: boolean = false
  loginFailMessage: boolean = false


  togglePasswordVisiablity() {

    this.isPasswordVisiable = !this.isPasswordVisiable
  }


  loginForm = new FormGroup({

    "username": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required])

  })


  get username() {

    return this.loginForm.controls['username']

  }

  get password() {

    return this.loginForm.controls['password']

  }


  loginFormSubmit() {


    const { username, password } = this.loginForm.value

    this.service.getLoggedInUser(username as string, password as string).subscribe((result) => {

      if (result[0]) {        

        localStorage.setItem("isLoggedIn", "true")
        this.loginForm.reset();
        this.router.navigate(['/home']);
      

      } else {

        this.loginFailMessage = true

        setTimeout(() => {
          this.loginFailMessage = false
          this.loginForm.reset();

        }, 3000);

      }


    })


  }

}
