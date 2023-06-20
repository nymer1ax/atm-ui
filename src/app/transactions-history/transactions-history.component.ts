import { Component, OnInit } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { TransactionService } from '../services/transactions.service';
import { Account } from '../interfaces/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.css']
})
export class TransactionsHistoryComponent implements OnInit {
  transactions: Transaction[] = [];
  accounts: Account[] = [];

  constructor(private transactionService: TransactionService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadTransactions();
    this.loadAccounts();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }

  loadAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  getAccountNumber(accountId: number): string {
    const account = this.accounts.find(account => account.id === accountId);
    return account ? account.accountNumber : '';
  }
}


