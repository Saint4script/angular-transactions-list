import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

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
     
    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute, private transactionService: TransactionService){
         
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.tabID = queryParam['tabID'];
            }
        );

        
    }

    ngOnInit(): void {

        this.rawTransactions = this.transactionService.getData();
        this.incomes = this.rawTransactions.get("incomes");
        this.outcomes = this.rawTransactions.get("outcomes");
        this.loans = this.rawTransactions.get("loans");
        this.investments = this.rawTransactions.get("investments");

        
        // initial last-page onOpen event class fix
        switch (this.tabID) {
            case "2": {
                let prevTabBlock = document.querySelector('div#incomes');
                prevTabBlock?.classList.remove("show");
                prevTabBlock?.classList.remove("active");
                let prevTab = document.querySelector('a#income-tab');
                prevTab?.classList.remove("active");

                let curTabBlock = document.querySelector('div#outcomes');
                curTabBlock?.classList.add("show");
                curTabBlock?.classList.add("active");
                let curTab = document.querySelector('a#outcome-tab');
                curTab?.classList.add("active");
                break;
            }

            case "3": {
                let prevTabBlock = document.querySelector('div#incomes');
                prevTabBlock?.classList.remove("show");
                prevTabBlock?.classList.remove("active");
                let prevTab = document.querySelector('a#income-tab');
                prevTab?.classList.remove("active");

                let curTabBlock = document.querySelector('div#loans');
                curTabBlock?.classList.add("show");
                curTabBlock?.classList.add("active");
                let curTab = document.querySelector('a#loans-tab');
                curTab?.classList.add("active");
                break;
            }

            case "1": {
                let prevTabBlock = document.querySelector('div#incomes');
                prevTabBlock?.classList.remove("show");
                prevTabBlock?.classList.remove("active");
                let prevTab = document.querySelector('a#income-tab');
                prevTab?.classList.remove("active");

                let curTabBlock = document.querySelector('div#investments');
                curTabBlock?.classList.add("show");
                curTabBlock?.classList.add("active");
                let curTab = document.querySelector('a#investments-tab');
                curTab?.classList.add("active");

                break;
            }
        }
    }
}
