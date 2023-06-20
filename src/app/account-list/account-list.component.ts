import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  selectedAccount: Account | null = null;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  selectAccount(account: Account): void {
    this.selectedAccount = account;
  }

  deselectAccount(): void {
    this.selectedAccount = null;
  }
}
