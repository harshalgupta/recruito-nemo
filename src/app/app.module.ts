import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { CollegeComponent } from './college/college.component';
import { DataStorage} from './datastore'
import { CompaniesComponent } from './companies/companies.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    SpecializationComponent,
    CollegeComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule// for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
