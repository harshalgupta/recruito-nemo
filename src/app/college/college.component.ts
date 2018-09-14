import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

import { FormArray, FormBuilder, FormGroup} from '@angular/forms';

class College {
  name: String;
  degree: String;
  constructor(_name: String, _degree: String){
    this.name = _name;
    this.degree = _degree;
  }
}

interface CollegeDetails {
  list: College[];
}

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  _collegeDetailDocRef: AngularFirestoreDocument<CollegeDetails>;
  _collegedetail: CollegeDetails;
  _collegesList: College[];

  collegeForm: FormGroup;

  get details() {
    return this.collegeForm.get('details') as FormArray;
  }

  // set details(detailArray: FormArray) {
    // this.collegeForm.get('details') = detailArray;
  // }

  constructor( private location: Location,
               private afs: AngularFirestore,
               private fb: FormBuilder) {
                 this.createwithbuilder();
               }

  // constructor() {}
  ngOnInit() {
    this._collegeDetailDocRef = this.afs.doc<CollegeDetails>('CollegeDetails/harshalTest');
    this._collegeDetailDocRef.valueChanges().subscribe(res => {
        this._collegedetail = res as CollegeDetails;
        if (this._collegedetail) {
          this._collegesList = this._collegedetail.list;
          if (this._collegesList.length > 0){
            console.log(res);
            console.log(this._collegesList)
            this.parseDetailsAndUpdateForm();
          }
        }
    });
  }

  parseDetailsAndUpdateForm() {
    this.details.removeAt(0);
    this._collegesList.forEach(col => {
      this.details.push(this.fb.group({
        collegename: col.name,
        degreename: col.degree,
      }));
    })
  }


  createwithbuilder() {
    this.collegeForm = this.fb.group({
      details: this.fb.array([
        this.fb.group({
          collegename: [''],
          degreename: [''],
        })
      ])
    });
  }


  addCollege() {
    this.details.push(
      this.fb.group ({
        collegename: [''],
        degreename: ['']
      })
    );
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.saveData();
    this.goBack();
  }

  saveData() {
    this._collegesList = [];
    this.details.value.forEach(formdata => {
      var college = new College(formdata.collegename, formdata.degreename);
      this._collegesList.push(college);
    })
    console.log(this._collegesList);
    const budgets = this._collegesList.map((obj)=> {return Object.assign({}, obj)});
    this._collegedetail.list = budgets;
    console.log(this._collegedetail);
    this._collegeDetailDocRef.set(Object.assign({}, this._collegedetail));
  }

  deleteCollege(index: number) {
    this.details.removeAt(index);
  }

  // onSubmit() {
  //
  // }

}
