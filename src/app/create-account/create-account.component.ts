import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from '../interfaces/account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account: Account = {
    accountNumber: '',
    balance: 0
  };

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  createAccount() {
    this.accountService.createAccount(this.account).subscribe(response => {
      console.log(response); 
      this.resetForm();
    });
  }

  resetForm() {
    this.account = {
      accountNumber: '',
      balance: 0
    };
  }
}
