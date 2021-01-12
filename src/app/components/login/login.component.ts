import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { DatabaseService} from '../../service/database.service'
import { Data } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticate=false;
  username = "winston";
  passowrd = 123456;

  dataArray:any[];

  constructor(public service: UserService , private databaseService: DatabaseService) {
    this.getadmindetains();
  }

  ngOnInit(): void {

  }

  getadmindetains(){
    this.databaseService.getAllAdmin().subscribe((response: any) => {
      this.dataArray =response ;
      console.log('Data requested ... ');
      console.log(this.dataArray);
      console.log(response.data);
    });
  }

  // fetchIssues() {
  //   this.issueService
  //   .getIssues()
  //   .subscribe((data: Issue[]) => {
  //     this.issues = data;
  //     console.log('Data requested ... ');
  //     console.log(this.issues);
  //   });
  // }

}
