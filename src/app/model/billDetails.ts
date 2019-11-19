import { Customer } from './customerreg';

export class BillDetails{
    billNo:number;
    billDate:string;
    amount:number;
    billPaid:boolean;
    customer:Customer; 
}