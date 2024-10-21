import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  // ALL VARIABLES
  isPasswordVissiable: boolean = false
  isPasswordVissiable2: boolean = false
  accountCreateMessage: boolean = false


  toggelPasswordVisiablity() {

    this.isPasswordVissiable = !this.isPasswordVissiable

  }

  toggelPasswordVisiablity2() {

    this.isPasswordVissiable2 = !this.isPasswordVissiable2

  }


  get username() {

    return this.signUpForm.controls['username'];

  }

  get email() {

    return this.signUpForm.controls['email'];

  }

  get password() {

    return this.signUpForm.controls['password'];

  }


  signUpForm = new FormGroup({

    "username": new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')]),
    "email": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required]),

  });

  signUpFormSubmit() {

    this.service.postUserData(this.signUpForm.value as User).subscribe((result) => {

      if (result) {

        this.accountCreateMessage = true

        setTimeout(() => {

          this.accountCreateMessage = false
          this.router.navigate(['/login'])
        }, 2000);


        this.signUpForm = new FormGroup({

          "username": new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')]),
          "email": new FormControl('', [Validators.required, Validators.email]),
          "password": new FormControl('', [Validators.required]),

        });

      } else {

      }

    })

  }

}
