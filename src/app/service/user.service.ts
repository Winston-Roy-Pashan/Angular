import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username = "winston";
  passowrd = 123456;

  constructor() { }

  loginform: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  changepassword: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    reEnterPassword: new FormControl('', [Validators.required])
  });

  isLoggedin() {
    // if (this.loginform.value.username == this.username && this.loginform.value.password == this.passowrd) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }
}
