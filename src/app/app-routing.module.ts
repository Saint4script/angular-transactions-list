import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPageComponent } from './list-page/list-page.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
    { path: '', component: SummaryComponent},
    { path: 'navigator', component: ListPageComponent},
    { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
