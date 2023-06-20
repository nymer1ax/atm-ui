import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8081/api'; 

  constructor(private http: HttpClient) { }

  createAccount(account: Account): Observable<Account> {
    const url = `${this.apiUrl}/accounts`;
    return this.http.post<Account>(url, account);
  }

  getAccounts(): Observable<Account[]> {
    const url = `${this.apiUrl}/accounts`;
    return this.http.get<Account[]>(url);
  }
}

