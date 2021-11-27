import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Transaction, TransactionType} from '../transaction';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent  implements OnInit{

    response: any;

    transactions: Transaction[] = [];

    totalIncome: number = 0;
    totalInvestments: number = 0;
    totalOutcome: number = 0;
    totalLoans: number = 0;

    totalTransactions: number = 0;


    constructor(private http: HttpClient){};

    ngOnInit(){
        this.response = this.http.get('../assets/res/transactions.json').subscribe(
            (data:any) => data.data.forEach((tr: any) => {

                let amount = Math.floor(Math.random() * 1_000_000);
                this.totalTransactions++;

                switch(tr.type) {
                    case TransactionType.Income: {
                        this.totalIncome++;
                        break;
                    }
                        
                    case TransactionType.Investment: {
                        this.totalInvestments++;
                        break;
                    }

                    case TransactionType.Loan: {
                        this.totalLoans++;
                        break;
                    }

                    case TransactionType.Outcome: {
                        this.totalOutcome++;
                        break;
                    }
                }

                this.transactions?.push(
                    new Transaction(
                        tr.type, 
                        tr._id, 
                        amount, 
                        tr.name.first + " " + tr.name.last,
                        tr.company,
                        tr.email,
                        tr.phone,
                        tr.address)
                )
                console.log(this.transactions);
            }
        ));

        

        
        // this.http.get('../assets/res/transactions.json').subscribe(
        //     (data:any) => {
        //         for()
        //     }
            
        //     this.transactions?.push(
        //         new Transaction(
        //             data.
        //         )
        //     )
        // );
    }
}
