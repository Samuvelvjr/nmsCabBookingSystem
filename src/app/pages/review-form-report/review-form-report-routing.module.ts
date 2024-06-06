import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewFormReportPage } from './review-form-report.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewFormReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewFormReportPageRoutingModule {}
