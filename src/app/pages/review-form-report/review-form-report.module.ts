import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewFormReportPageRoutingModule } from './review-form-report-routing.module';

import { ReviewFormReportPage } from './review-form-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewFormReportPageRoutingModule
  ],
  declarations: [ReviewFormReportPage]
})
export class ReviewFormReportPageModule {}
