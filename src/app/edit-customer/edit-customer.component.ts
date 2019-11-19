import { Component, OnInit, Input } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { Customer } from '../model/customerreg';
import { PassdataService } from '../passdata.service';
import { HtbsService } from '../htbs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {


  customer: Customer;

  constructor(private dataService: PassdataService, private service: HtbsService,private router:Router) {
    this.customer = new Customer()
  }

  ngOnInit() {
    this.customer = this.dataService.getcustomerToBeEdited()
  }

  onUpdate() {
    const confirmation = confirm("Are you sure?")
    if (confirmation){
      this.service.updateCustomer(this.customer).subscribe();
      // this.router.navigate(['/admin-page'])
      this.router.navigateByUrl('admin-page')
      
    }
      
  }

  onCancel(){
    this.router.navigateByUrl('admin-page')
  }

  taxChangeAlert(){
    (<HTMLDivElement>document.getElementById("alrt")).hidden=false;
  }

  taxChangeAlert1(){
    (<HTMLDivElement>document.getElementById("alrt1")).hidden=false;
  }

}
