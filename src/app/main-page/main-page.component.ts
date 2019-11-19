import { Component, OnInit } from '@angular/core';
import { PassdataService } from '../passdata.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { Customer } from '../model/customerreg';
import { HtbsService } from '../htbs.service';
import { BillDetails } from '../model/billDetails';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  loggedInCustomer = "";

  customer: Customer = new Customer();

  customerFullName = "";

  billDetails: BillDetails[];


  constructor(private dataService: PassdataService, private router: Router, private service: HtbsService) {
    // this.billDetails=new BillDetails();
  }


  ngOnInit() {


    (<HTMLDivElement>document.getElementById("navg")).hidden = false;
    this.loggedInCustomer = sessionStorage.getItem("userName");
    this.service.getLoggedInCustomer(this.loggedInCustomer).subscribe(data => {
      console.log(data);
      this.customer = data;
      this.dataService.setCustId(this.customer.custId);
      this.customerFullName = this.customer.firstName + " " + this.customer.lastName;

      this.service.getBillDetails(this.customer.custId).subscribe((data) => {
        console.log(data);
        this.billDetails = data;
  
      });
    });



    

  }



  // canExit() : boolean {

  //   if (confirm("Do you wish to Please confirm")) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }

  logout() {
    if (confirm("Are you sure ?")) {
      this.service.logOut();
      this.router.navigate(['/homepage']);
    }
  }

  onPay(bill: BillDetails) {
    // this.billDetails.splice(0, 1);
    // console.log(this.billDetails.length);
    // if (this.billDetails.length <= 1) {
    //   (<HTMLHeadElement>document.getElementById("noBills")).hidden = false;
    // }
    localStorage.setItem("billNo", bill.billNo.toString());
    this.dataService.setAmount(bill.amount);

    
    console.log(bill.amount)
    // localStorage.setItem("billGenerateDate", bill.billDate);

    this.dataService.setdate(bill.billDate);
    // this.service.fine(bill.billNo);

    this.router.navigate(['/payment']);

  }

  showHistory() {
    this.router.navigate(['/transactions']);
  }

}

// export interface IDeactivateComponent {
//   canExit: () => Observable<boolean> | Promise<boolean> | boolean;
// }
