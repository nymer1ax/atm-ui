import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'transaction-history', component: TransactionsHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
