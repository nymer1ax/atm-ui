import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';
import { AccountListComponent } from './account-list/account-list.component';
import { MakeDepositComponent } from './make-deposit/make-deposit.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    TransactionsHistoryComponent,
    AccountListComponent,
    MakeDepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
