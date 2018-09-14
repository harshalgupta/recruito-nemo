import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent }      from '../college/college.component';
import {CompaniesComponent}      from '../companies/companies.component';
import {AccountComponent}        from '../account/account.component';

const routes: Routes = [
  { path: 'colleges', component: CollegeComponent },
  { path: 'companies', component: CompaniesComponent},
  { path: 'account', component: AccountComponent},
  { path: '', component: AccountComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
