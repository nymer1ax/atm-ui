import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { AccountService } from '../services/account.service';
import { TransactionAction } from '../interfaces/transactionaction';
import { TransactionService } from '../services/transactions.service';

@Component({
  selector: 'app-make-deposit',
  templateUrl: './make-deposit.component.html',
  styleUrls: ['./make-deposit.component.css']
})
export class MakeDepositComponent implements OnInit {
  accounts: Account[] = [];
  transaction: TransactionAction = { accountId: null, amount: null };

  constructor(private accountService: AccountService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  makeDeposit(): void {
    this.transactionService.makeDeposit(this.transaction)
      .subscribe(() => {
      });
  }
}
