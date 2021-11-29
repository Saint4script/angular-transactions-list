export class TransactionService{
  
    private data: Map<string, Array<Object>> = new Map();
      
    getData(): Map<string, Array<Object>> {
          
        return this.data;
    }
    addData(name: string, value: Array<Object>){
          
        this.data.set(name, value);
        console.log(this.data);
    }
}