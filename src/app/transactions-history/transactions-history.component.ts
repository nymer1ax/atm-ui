import { Component, OnInit } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { TransactionService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.css']
})
export class TransactionsHistoryComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }
}

