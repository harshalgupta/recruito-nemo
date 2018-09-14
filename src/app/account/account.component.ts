import { Component, OnInit } from '@angular/core';
import {CollegeComponent} from '../college/college.component';
import {CompaniesComponent} from '../companies/companies.component';
import {Router} from '@angular/router';
import {DataStorage} from '../datastore'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  name : String;
  email: String;
  role = "Senior Developer";
  collgeInfo : CollegeComponent;
  companiesInfo: CompaniesComponent;

  userImage;


  constructor( private router: Router, private _data: DataStorage) {
    if (!this.getAccountDetailsFromServer()){

    }
    this._data.id = "harshalTest";
  }
  ngOnInit() {
  }

  getAccountDetailsFromServer() : boolean {
    return true;
  }

  gotoColleges() {

    this.router.navigate(['colleges']);
  }
}
