import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-today-booking',
  templateUrl: './today-booking.page.html',
  styleUrls: ['./today-booking.page.scss'],
})
export class TodayBookingPage implements OnInit {
  todayBooking: any = [];
  constructor(public rest: RestService,public router: Router) { }

  ngOnInit() {
    this.toDayBooking();
  }
  backButton(){
    this.router.navigate(['/home-page'])
  }
  toDayBooking(){
          this.rest.todayCabBooking().then(data => {
            this.todayBooking = data;
            if (this.todayBooking!='') {
            }
            else {
              this.rest.presentAlert1("Message", "No Data Found!");
            }

})
  }
  }
