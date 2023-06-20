import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';
import { AccountListComponent } from './account-list/account-list.component';
import { MakeDepositComponent } from './make-deposit/make-deposit.component';
import { MakeWithdrawalComponent } from './make-withdrawal/make-withdrawal.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'transaction-history', component: TransactionsHistoryComponent},
  {path: 'accounts', component: AccountListComponent},
  {path: 'deposit', component: MakeDepositComponent},
  {path: 'withdrawal', component: MakeWithdrawalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
