import { Injectable } from '@angular/core';
import { Customer } from './model/customerreg';

@Injectable({
  providedIn: 'root'
})
export class PassdataService {
  custId: number;
  setCustId(custId: number) {
    this.custId=custId
  }

  getCustId():number{
    return this.custId;
  }
  
  
  private custName=""

  date;
  amount;

  customerToBeEdited:Customer;
  constructor() { }

  
  setdate(billDate: string) {
    this.date=billDate;
  }

  getDate(){
    return this.date;
  }

  setAmount(amount: number) {
    this.amount=amount;
  }

  getAmount(){
    return this.amount;
  }
  

  getCustName(){
    return this.custName;
  }

  setCustName(custName){
    this.custName=custName;
  }

  setcustomerToBeEdited(customer: any) {
    this.customerToBeEdited=customer;
  }

  getcustomerToBeEdited(){
    return this.customerToBeEdited;
  }
}
