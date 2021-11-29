import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Transaction, TransactionType } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})

export class SummaryComponent {

    constructor(private http: HttpClient, private transactionService: TransactionService){};

    addTransaction(
        type:string, 
        id:number,
        amount: number,
        firstName: string,
        lastName: string,
        company: string,
        email: string,
        phone: string,
        address: string
    ) {
        this.transactions.push(
            new Transaction(
                        type, 
                        id, 
                        amount, 
                        firstName + " " + lastName,
                        company,
                        email,
                        phone,
                        address
            )
        );
    }

    transactions: Transaction[] = [];

    // надо бы классами сделать, конечно...
    incomes: Object[] = [];
    investments: Object[] = [];
    outcomes: Object[] = [];
    loans: Object[] = [];


    // мб иx просто брать из массива объектов выше?
    totalIncome: number = 0;
    totalInvestments: number = 0;
    totalOutcome: number = 0;
    totalLoans: number = 0;

    totalTransactions: number = 0;

    ngOnInit(){
        this.http.get('../assets/res/transactions.json').subscribe(
            (data:any) => data.data.forEach((tr: any) => {

                let amount = Math.floor(Math.random() * 1_000_000);
                this.totalTransactions++;

                switch(tr.type) {
                    case TransactionType.Income: {
                        this.totalIncome++;
                        this.incomes.push(tr);
                        break;
                    }
                        
                    case TransactionType.Investment: {
                        this.totalInvestments++;
                        this.investments.push(tr);
                        break;
                    }

                    case TransactionType.Loan: {
                        this.totalLoans++;
                        this.loans.push(tr);
                        break;
                    }

                    case TransactionType.Outcome: {
                        this.totalOutcome++;
                        this.outcomes.push(tr);
                        break;
                    }
                }

                this.addTransaction(
                    tr.type, 
                    tr._id, 
                    amount, 
                    tr.name.first,
                    tr.name.last,
                    tr.company,
                    tr.email,
                    tr.phone,
                    tr.address
                );
                // console.log(this.transactions);
            }
        ));

        this.transactionService.addData("incomes", this.incomes);
        this.transactionService.addData("outcomes", this.outcomes);
        this.transactionService.addData("loans", this.loans);
        this.transactionService.addData("investments", this.investments);
    }
}
