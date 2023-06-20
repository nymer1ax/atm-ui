import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';
import { AccountListComponent } from './account-list/account-list.component';
import { MakeDepositComponent } from './make-deposit/make-deposit.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'transaction-history', component: TransactionsHistoryComponent},
  {path: 'accounts', component: AccountListComponent},
  {path: 'deposit', component: MakeDepositComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
