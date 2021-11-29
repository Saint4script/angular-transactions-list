import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

    tabID: any;
    totalIncome: number = 0;
     
    // private routeSubscription: Subscription;
    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute){

        console.log(this.totalIncome);
         
        // this.routeSubscription = route.params.subscribe(params=>this.tabID=params['tabID']);
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.tabID = queryParam['tabID'];
            }
        );
    }

}
