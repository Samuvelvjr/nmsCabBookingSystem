import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayBookingPage } from './today-booking.page';

const routes: Routes = [
  {
    path: '',
    component: TodayBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayBookingPageRoutingModule {}
