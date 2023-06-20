export interface Transaction {
    id?: number;
    transactionType: string;
    amount: number;
    finalBalance: number;
    accountId: number;
    description: string;
  }
  