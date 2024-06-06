import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import * as moment from 'moment';

@Component({
  selector: 'app-date-wise-report',
  templateUrl: './date-wise-report.page.html',
  styleUrls: ['./date-wise-report.page.scss'],
})
export class DateWiseReportPage implements OnInit {
  fdate:any;
  tdate:any;
  fdate1:any="From Date";
  tdate1:any="To Date";
  clicked:any;
  dateWiseReportDetails:any = [];
  constructor(public rest: RestService,public router: Router) { }

  ngOnInit() {
  }
  backButton(){
    this.router.navigate(['/home-page'])
  }
  check1DateEmpty(){
        this.fdate1=moment(this.fdate).format("DD-MMM-YYYY");
        console.log(this.fdate1);
        
    }
    checkDateEmpty()
      {
        this.tdate1=moment(this.tdate).format("DD-MMM-YYYY");
    }
    dateWiseReport(){
      this.rest.dateWiseReportDetails(this.fdate1,this.tdate1).then(data => {
        this.dateWiseReportDetails = data;
        if (this.dateWiseReportDetails!='') {
        }
        else {
          this.rest.presentAlert1("Message", "No Data Found!");
        }
  })
    }
}
