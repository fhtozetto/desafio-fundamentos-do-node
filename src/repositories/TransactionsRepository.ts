import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionsDTO {
  title: string;
  value: number;
  type: string;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(transactions: []): Balance {
    const income = transactions
      .filter(item => item.type === 'income')
      .reduce((transaction, subtotal) => transaction.income + subtotal);
  }

  public create({ title, value, type }:CreateTransactionsDTO): Transaction {
    const transaction = new Transaction({ title, value, type: 'income' });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
