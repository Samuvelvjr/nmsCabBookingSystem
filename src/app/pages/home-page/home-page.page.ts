import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  adminName : any;
  todayDate : any;
  constructor(public router: Router,public datePipe : DatePipe) { }

  ngOnInit() {
    const currentDate = new Date();
    this.todayDate = this.datePipe.transform(currentDate, 'dd-MM-yyyy')
    if(this.todayDate == localStorage.getItem("loginTodayDate"))
      {
        this.adminName = localStorage.getItem("loginAdminName");
      }
  }
  todayBooking(){
    this.router.navigate(['/today-booking'])
  }
  cabBookingDtls(){
    this.router.navigate(['/cab-booking-details'])
  }
  dateWiseReport(){
    this.router.navigate(['/date-wise-report'])
  }
  contactFormReport(){
    this.router.navigate(['/contact-form-report'])
  }
  reviewFormReport(){
    this.router.navigate(['/review-form-report'])
  }
}
