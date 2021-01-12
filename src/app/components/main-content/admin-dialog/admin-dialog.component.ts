import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';
import { InfoService } from 'src/app/service/info.service';
import { Admin } from '../../../interfaces/admin';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent implements OnInit {
  // admin: Admin = {
  //   name: '',
  //   id: '',
  //   mail: ''
  // };

  Admin: Admin[];
  adminData: any[];

  adminForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private superservice: InfoService, private databaseService: DatabaseService) {
    this.adminForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      employeeCode: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigateByUrl("/content");
  }

  ngOnInit(): void {
    this.getAllAdmin();
  }

  getAllAdmin(): void {
    // this.Admin = this.superservice.getAllAdmin();
    // console.log("all super admin",this.Admin)
    // this.adminData = this.databaseService.getAllAdmin();
    this.databaseService.getAllAdmin().subscribe((response: any) => {
      this.adminData = response.data;
      console.log('Data requested ... ');
      console.log(this.adminData);
      //console.log(response.data);
    });
  }

  addAdmin(name, email, employeeCode) {
    this.databaseService.addAdmin(name, email, employeeCode).subscribe(() => {
      console.log("admin is added successfully....");
    });
  }

  deleteAdmin(id) {
    this.databaseService.deleteAdmin(id).subscribe(() => {
      console.log("admin is deleted successfully....");
      this.getAllAdmin();
    });
  }



  // save(): void {
  //   const TempPhone: Admin = { ...this.admin };
  //   this.Admin.unshift(TempPhone)
  // };

  // delete(spr: Admin): void {
  //   this.Admin.forEach((item, index) => {
  //     if (item === spr) {
  //       this.Admin.splice(index, 1)
  //     }
  //   })
  // }
}
