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
    const sourceAccount = this.accounts.find(account => account.id === this.transfer.sourceAccountId);
    const destinationAccount = this.accounts.find(account => account.id === this.transfer.destinationAccountId);
  

    if (sourceAccount && destinationAccount) {
      this.transfer.sourceAccountId = sourceAccount.id ?? null;
      this.transfer.destinationAccountId = destinationAccount.id ?? null;
  
      this.transactionService.makeTransfer(this.transfer)
        .subscribe(() => {
          console.log("transferido")
        });
    }
  }
  
}




