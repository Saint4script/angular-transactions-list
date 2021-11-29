import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import { TransactionService } from '../transaction.service';
import { Transaction, TransactionType } from '../transaction';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit{

    tabID: any;

    rawTransactions: Map<string, Array<Transaction>> = new Map();
    
    incomes: Transaction[] | undefined = [];
    investments: Transaction[] | undefined = [];
    outcomes: Transaction[] | undefined = [];
    loans: Transaction[] | undefined = [];
     
    // private routeSubscription: Subscription;
    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute, private transactionService: TransactionService){
         
        // this.routeSubscription = route.params.subscribe(params=>this.tabID=params['tabID']);
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.tabID = queryParam['tabID'];
            }
        );

        
    }

    ngOnInit(): void {
        // console.log(this.transactionService.getData());
        this.rawTransactions = this.transactionService.getData();
        this.incomes = this.rawTransactions.get("incomes");
        console.log(this.incomes);

    }

}
