import { Component, OnInit } from '@angular/core';
import { IMyDrpOptions } from 'mydaterangepicker';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  myForm: FormGroup;
  beginDate: object = {};
  endDate: object = {};
  sdate: any = [];
  edate: any = [];
  dateRangeValue: any;
  dateValue1:any;
  dateValue2:any;
  constructor(private formBuilder: FormBuilder) { }

  myDatePickerOptions: IMyDpOptions = {
    
    dateFormat: 'yyyy-mm-dd'



  };
  ngOnInit() {
    
    // Set date range (today) using the patchValue function
    let date = new Date();
    this.dateValue1={
      date:{
      year:date.getFullYear(),
      month:date.getMonth()+1,
      day:date.getDate()
      }
    };
    console.log(this.dateValue1);
    this.dateValue2={
      date:{
      year:date.getFullYear(),
      month:date.getMonth()+1,
      day:date.getDate()+10
    }}
    console.log(this.dateValue2);
    this.dateRangeValue = {
      // beginDate: { year: 2018, month: 10, day: 9 },
      // endDate: { year: 2018, month: 10, day: 19 }
      beginDate:{
      
        // year: this.dateValue1.year,
        // month: this.dateValue1.month,
        // day: this.dateValue1.day
        year:date.getFullYear(),
        month:date.getMonth()+1,
         day:date.getDate()
      },
     
      endDate:{
        // year: this.dateValue2.year,
        // month:this.dateValue2.month,
        // day:this.dateValue2.day
        year:date.getFullYear(),
        month:date.getMonth()+1,
         day:date.getDate()+10 
      }
    };
   

    this.myForm = this.formBuilder.group({
      sdate: ['', Validators.required],
      edate: ['', Validators.required],
      myDateRange: [this.dateRangeValue, Validators.required],
    });
  }

  setDate(): void {
    let date = new Date();
    console.log(date);
    this.myForm.patchValue({
      dob: {
        date: {
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate()
        }

      }
    })

  }
  setDateRange(): void {

    let date = new Date();
    this.myForm.patchValue({
      myDateRange: {
        beginDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        },
        endDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate() + 10

        }

      }
    });
  }

  submit(a) {
    // console.log(this.myForm.value.sdate);
    // console.log(this.myForm.value.edate);
    this.beginDate = this.myForm.value.sdate;


    // let StartDate = new Date(this.myForm.value.sdate.jsdate);
    let StartDate = this.myForm.value.sdate;
    let EndDate=this.myForm.value.edate;
    console.log(StartDate);
    this.dateRangeValue = {
      beginDate: {
        year: StartDate.date.year,
        month: StartDate.date.month,
        day: StartDate.date.day
      },
      endDate: {
        year: EndDate.date.year,
        month:EndDate.date.month,
        day: EndDate.date.day
      }
    };
    this.myForm.patchValue({
      myDateRange: this.dateRangeValue
    });
  }
}
