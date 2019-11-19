import { Component, OnInit, ViewChild } from '@angular/core';
import { PassdataService } from '../passdata.service';
import { Router } from '@angular/router';
import { HtbsService } from '../htbs.service';
import { Customer } from '../model/customerreg';
import { BillGenerate } from '../model/billGen';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BillDetails } from '../model/billDetails';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {

  index: any = [];

  count = 1;

  loggedInAdmin = "";

  searchText

  customers: Customer[] = [];

  customerToBeEdited: Customer;

  todaysDate=new Date().getDate();

  todaysMonth = new Date().getMonth() + 1;

  regDate;

  billGen: BillGenerate;

  users = ["Cryptogenic", "document", "Cryptogenic", "Cryptogenic"]
  yep;
  pat: any;
  valid: Object;
  monthlyBill: BillDetails;

  constructor(private dataService: PassdataService, private router: Router, private service: HtbsService) {
    this.billGen = new BillGenerate();
    this.monthlyBill = new BillDetails();
  }

  displayedColumns: string[] = ['index', 'firstName', 'lastName', 'locality', 'houseType', 'houseNo', 'plotNo', 'propertyRegistrationDate', 'area', 'action'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {


    (<HTMLDivElement>document.getElementById("navg")).hidden = true

    this.loggedInAdmin = sessionStorage.getItem("adminName");
    this.service.getCustomers().subscribe(data => {
      this.customers = data;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  some(date): boolean {
    if (this.todaysMonth.toString() == date.slice(5, 7))
      return false;
    else
      return true;
  }

  areDateSame(date): boolean {
    if (this.todaysDate.toString() == date.slice(8, 10)) {
      return true
    }
    else
      return false

  }

  generateBill(firstName, lastName, userName, custId) {
    this.billGen.userName = userName;
    localStorage.setItem("custName", this.billGen.userName);
    this.billGen.billGenerateDate = new Date().toISOString().slice(0, 10)

    const confirmation = confirm("Bill will be generated for " + firstName + " " + lastName + ". Are you sure?")
    if (confirmation) {
      this.service.checkBillForCurrentMonth(custId).subscribe(data => {
        //     console.log(this.billGen.userName)
        console.log(data)
        if (data)
          alert("Bill has already generated for this customer for this month");
        else{
          this.service.generateBill(this.monthlyBill, custId).subscribe();
          window.location.reload();
        }
          
      })
    }
  }


  logout() {
    if (confirm("Are you sure ?")) {
      this.service.logOut();
      this.router.navigate(['/homepage']);
    }
  }

  editCustomer(customer) {
    console.log(customer)

    this.dataService.setcustomerToBeEdited(customer);
    this.router.navigate(['/edit-customer'])
    // window.location.reload()
  }

  deleteCustomer(customer: Customer) {
    let y = confirm("Are you sure ?")
    if (y) {
      this.service.deleteCustomer(customer.custId).subscribe();
      window.location.reload();
    }

  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  hide() {
    document.getElementById("editing").hidden = true;
  }
}
