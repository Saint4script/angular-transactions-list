export class TransactionService{
  
    private data: Map<string, number> = new Map();
      
    getData(): Map<string, number> {
          
        return this.data;
    }
    addData(name: string, value: number){
          
        this.data.set(name, value);
    }
}