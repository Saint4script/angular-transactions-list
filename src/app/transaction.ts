export enum TransactionType {Income="income", Outcome="outcome", Loan="loan", Investment="investment"};


export class Transaction{
    

    constructor(
        public type:string, 
        public id:number,
        public amount: number,
        public name: string,
        public company: string,
        public email: string,
        public phone: string,
        public address: string
    ){}
}