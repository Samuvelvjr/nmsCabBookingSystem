import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFormReportPage } from './contact-form-report.page';

const routes: Routes = [
  {
    path: '',
    component: ContactFormReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactFormReportPageRoutingModule {}
