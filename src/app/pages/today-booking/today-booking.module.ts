import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayBookingPageRoutingModule } from './today-booking-routing.module';

import { TodayBookingPage } from './today-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayBookingPageRoutingModule
  ],
  declarations: [TodayBookingPage]
})
export class TodayBookingPageModule {}
