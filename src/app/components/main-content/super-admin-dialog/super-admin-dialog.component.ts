import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';
import { InfoService } from 'src/app/service/info.service';
import { Admin}  from '../../../interfaces/admin';

@Component({
  selector: 'app-super-admin-dialog',
  templateUrl: './super-admin-dialog.component.html',
  styleUrls: ['./super-admin-dialog.component.scss']
})
export class SuperAdminDialogComponent implements OnInit {
  super: Admin = {
    name:'',
    id:'',
    mail:''
   };

  superAdmin: Admin[];
  superAdminData:any[];

  constructor(private router: Router , private superservice : InfoService,private databaseService: DatabaseService) { }

  


  redirect() {
    this.router.navigateByUrl("/content");
  }


  ngOnInit(): void {
    this.getAllSuperAdmin();
  }

  getAllSuperAdmin(): void {
    // this.superAdmin = this.superservice.getAllSuperAdmin();
    // console.log("all super admin",this.superAdmin)
    this.databaseService.getAllSuperAdmin().subscribe((response: any) => {
      this.superAdminData =response.data ;
      console.log('Data requested ... ');
      console.log(this.superAdminData);
      //console.log(response.data);
    });
  }

 

  save(): void {
    const TempPhone: Admin = { ...this.super };
    this.superAdmin.unshift(TempPhone)
  };

  delete(spr: Admin): void {
    this.superAdmin.forEach((item, index) => {
      if (item === spr) {
        this.superAdmin.splice(index, 1)
      }
    })
  }


}
