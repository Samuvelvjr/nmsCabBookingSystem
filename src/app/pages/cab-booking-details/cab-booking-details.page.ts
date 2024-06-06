import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-cab-booking-details',
  templateUrl: './cab-booking-details.page.html',
  styleUrls: ['./cab-booking-details.page.scss'],
})
export class CabBookingDetailsPage implements OnInit {
  bookingDetails: any = [];

  constructor(public rest: RestService,public router: Router) { }
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.bookingDetails];

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.bookingDetails.filter((d:any) => d.toLowerCase().indexOf(query) > -1);
  }
  ngOnInit() {
    this.cabBookingDetails();
  }
  backButton(){
    this.router.navigate(['/home-page'])
  }
  cabBookingDetails(){
    this.rest.cabBookingDetails().then(data => {
      this.bookingDetails = data;
      if (this.bookingDetails!='') {
      }
      else {
        this.rest.presentAlert1("Message", "No Data Found!");
      }

})
}
}
