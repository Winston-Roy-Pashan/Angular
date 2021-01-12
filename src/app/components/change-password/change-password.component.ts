import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public dialog: MatDialog, public service: UserService, private router: Router) {
  }

  redirect() {
    this.router.navigateByUrl("/content");
  }

  checkpassword() {
    console.log("change password...", this.service.changepassword)
    if (this.service.changepassword.value.newPassword == this.service.changepassword.value.reEnterPassword) {
      alert("Passowrd Updated Succefully!!!");
      this.router.navigate(['login'])
    } else {
      alert("Please enter proper Credential!!");
      this.router.navigate(['change-password'])
    }
  }
  
  ngOnInit(): void {
  }

}
