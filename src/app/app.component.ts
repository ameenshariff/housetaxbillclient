import { Component, OnInit } from '@angular/core';
import { PassdataService } from './passdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: PassdataService) { }
  ngOnInit() {

    // (<HTMLLabelElement>document.getElementById("heading")).hidden = false;
    
  }
  title = 'House Tax Billing System';


}
