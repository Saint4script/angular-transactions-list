import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit{

    tabID: any;
    totalIncome: number = 0;
     
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
        console.log(this.transactionService.getData());
    }

}
