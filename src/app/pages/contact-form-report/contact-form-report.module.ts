import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactFormReportPageRoutingModule } from './contact-form-report-routing.module';

import { ContactFormReportPage } from './contact-form-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactFormReportPageRoutingModule
  ],
  declarations: [ContactFormReportPage]
})
export class ContactFormReportPageModule {}
