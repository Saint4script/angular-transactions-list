import { Transaction, TransactionType } from './transaction';

export class TransactionService{
  
    private data: Map<string, Array<Transaction>> = new Map();
      
    getData(): Map<string, Array<Transaction>> {
          
        return this.data;
    }
    addData(name: string, value: Array<Transaction>){
          
        this.data.set(name, value);
    }
}