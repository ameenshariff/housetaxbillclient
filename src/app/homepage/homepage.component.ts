import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassdataService } from '../passdata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title = 'Home Tax Billing System';

  constructor(private router:Router,private passService:PassdataService) { }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden=true
  }

  login(){
    this.router.navigate(['/login'])
  }

  register(){
    this.router.navigate(['/registration']) 
  }
  


}
