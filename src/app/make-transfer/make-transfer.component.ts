import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { AccountService } from '../services/account.service';
import { Transfer } from '../interfaces/transfer';
import { TransactionService } from '../services/transactions.service';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {
  accounts: Account[] = [];
  transfer: Transfer = { sourceAccountId: null, destinationAccountId: null, amount: null };

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

  makeTransfer(): void {
    const sourceAccountId = Number(this.transfer.sourceAccountId);
    const destinationAccountId = Number(this.transfer.destinationAccountId);
  
    console.log("paso 1");
  
    if (
      !isNaN(sourceAccountId) && !isNaN(destinationAccountId) &&
      this.accounts.some(account => account.id === sourceAccountId) &&
      this.accounts.some(account => account.id === destinationAccountId)
    ) {
      console.log("paso 2");
  
      this.transfer.sourceAccountId = sourceAccountId;
      this.transfer.destinationAccountId = destinationAccountId;
  
      this.transactionService.makeTransfer(this.transfer)
        .subscribe(() => {
          console.log("transferido");
        });
  
      console.log("paso 3");
    }
  
    console.log("paso 4");
  }
  
  
  
  }
  
  





