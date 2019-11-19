import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HtbsService } from '../htbs.service';
import { Payment } from '../model/payment';
import { PassdataService } from '../passdata.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  billNo;

  amount;

  fine;

  payment: Payment = new Payment();


  loggedInCustomer
  billAmount: any;

  constructor(private router: Router, private service: HtbsService, private passService: PassdataService) {

  }



  ngOnInit() {
    this.billAmount = this.passService.getAmount();

    
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    console.log(formatted_date)
    this.billNo = localStorage.getItem("billNo"); //getting bill number

    this.payment.billNo = this.billNo;

    let current_datetime_for_fine = new Date()
    let formatted_date_for_fine = current_datetime_for_fine.getFullYear() + "-" + (current_datetime_for_fine.getMonth() + 1) + "-" + current_datetime_for_fine.getDate()

    this.service.getFine(this.payment.billNo, formatted_date_for_fine).subscribe(data => {
      this.fine = data;
      this.payment.fine = this.fine;
    })


    this.payment.paymentDate = formatted_date;

    this.loggedInCustomer = sessionStorage.getItem("userName")

    this.amount = this.billAmount;

  }

  onMakePayment() {


    const total = this.billAmount + this.fine;
    // console.log(this.billAmount)
    console.log(total)
    this.payment.amount = this.amount;
    this.payment.userName = sessionStorage.getItem("userName");
    this.payment.billGenerateDate = this.passService.getDate();
    const makePayment = confirm("You are about to make a payment of " + total + ". \nAre you sure?")

    if (makePayment) {
      this.payment.paymentNo = (<HTMLInputElement>document.getElementById("pNo")).value;
      localStorage.removeItem("billNo"); //removing bill number from local storage
      this.service.savePaymentDetails(this.payment,this.passService.getCustId()).subscribe();
      this.router.navigateByUrl('main-page');

      // window.location.reload();

      console.log(this.payment);
    }
  }


  logout() {
    if (confirm("Are you sure ?")) {
      this.service.logOut();
      this.router.navigate(['/homepage']);
    }

  }

}
