import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { Router } from '@angular/router';
import { HtbsService } from '../htbs.service';
import { PassdataService } from '../passdata.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  login: Login;
  isUser;
  error: any;
  show: boolean


  constructor(private router: Router, private service: HtbsService, private dataService: PassdataService) {
    this.login = new Login();
    this.show = false;
  }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = true
  }

  onLogin() {

    this.isUser = this.service.isUser(this.login.userName).subscribe((data) => {
      if (data) {
        console.log(data)
        localStorage.setItem("type", "user");
        this.service.validateLogin(this.login).subscribe(data => {
          // console.log(data)
          if (data) {
            this.dataService.setCustName(this.login.userName);
            sessionStorage.setItem("userName", this.login.userName)
            this.router.navigate(['/main-page']);
          }
          else
            alert("User Name or Password is incorrect")

        })

      }
      else {
        localStorage.setItem("type", "admin");
        this.service.validateAdmin(this.login).subscribe((data) => {
          if (data) {
            sessionStorage.setItem("adminName", this.login.userName);
            this.router.navigate(['/admin-page']);
            console.log("Admin")
          }
          else
            alert("User Name or Password is incorrect")
        },
          error => this.error = error);

      }


    });

  }

  password1() {
    console.log("show.........")
    this.show = !this.show;
  }



  // onChange() {
  //   console.log("qwerty");
  //   (<HTMLDivElement>document.getElementById("pass")).hidden = false;
  // }

}
