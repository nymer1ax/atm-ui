import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = '/api/transactions';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }
}

