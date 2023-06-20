import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction';
import { TransactionAction } from '../interfaces/transactionaction';
import { Transfer } from '../interfaces/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8081/api'; // Ajusta la URL base según tu configuración

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    const url = `${this.apiUrl}/transactions`;
    return this.http.get<Transaction[]>(url);
  }

  makeDeposit(transaction: TransactionAction): Observable<any> {
    const url = `${this.apiUrl}/deposit`;
    return this.http.post(url, transaction);
  }

  makeWithdrawal(transaction: TransactionAction): Observable<any> {
    const url = `${this.apiUrl}/withdrawal`;
    return this.http.post(url, transaction);
  }

  makeTransfer(transfer: Transfer): Observable<any> {
    const url = `${this.apiUrl}/transfer`;
    return this.http.post(url, transfer);
  }

  
}


