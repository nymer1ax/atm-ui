import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { AccountService } from '../services/account.service';
import { TransactionAction } from '../interfaces/transactionaction';
import { TransactionService } from '../services/transactions.service';

@Component({
  selector: 'app-make-withdrawal',
  templateUrl: './make-withdrawal.component.html',
  styleUrls: ['./make-withdrawal.component.css']
})
export class MakeWithdrawalComponent implements OnInit {
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

  makeWithdrawal(): void {
    this.transactionService.makeWithdrawal(this.transaction)
      .subscribe(() => {
      });
  }
}

