import { Component, OnInit, ViewChild } from '@angular/core';
import { HtbsService } from '../htbs.service';
import { Payment } from '../model/payment';
import { PassdataService } from '../passdata.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-payment-transactions',
  templateUrl: './payment-transactions.component.html',
  styleUrls: ['./payment-transactions.component.css']
})
export class PaymentTransactionsComponent implements OnInit {

  transactions: Payment[];

  billGenerateDate;


  constructor(private service: HtbsService, private passService: PassdataService) { }

  displayedColumns: string[] = ['i', 'transactionId', 'billNo', 'billGenerateDate', 'paymentDate', 'amount', 'fine', 'paymentNo'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = false
    this.billGenerateDate = this.passService.getDate();
    this.service.getAllTransactions(this.passService.getCustId()).subscribe((data) => {
      console.log(data)
      this.transactions = data;

      this.dataSource = new MatTableDataSource(this.transactions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      if (this.transactions.length == 0) {
        (<HTMLButtonElement>document.getElementById("print")).hidden = true;
        (<HTMLParagraphElement>document.getElementById("noTrans")).hidden = false;
      }
      console.log(this.transactions.length)
    });



  }

  printTransactions() {
    print();
  }

}
