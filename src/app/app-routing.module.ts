import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'today-booking',
    loadChildren: () => import('./pages/today-booking/today-booking.module').then( m => m.TodayBookingPageModule)
  },
  {
    path: 'cab-booking-details',
    loadChildren: () => import('./pages/cab-booking-details/cab-booking-details.module').then( m => m.CabBookingDetailsPageModule)
  },
  {
    path: 'date-wise-report',
    loadChildren: () => import('./pages/date-wise-report/date-wise-report.module').then( m => m.DateWiseReportPageModule)
  },
  {
    path: 'contact-form-report',
    loadChildren: () => import('./pages/contact-form-report/contact-form-report.module').then( m => m.ContactFormReportPageModule)
  },
  {
    path: 'review-form-report',
    loadChildren: () => import('./pages/review-form-report/review-form-report.module').then( m => m.ReviewFormReportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
