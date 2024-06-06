import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-contact-form-report',
  templateUrl: './contact-form-report.page.html',
  styleUrls: ['./contact-form-report.page.scss'],
})
export class ContactFormReportPage implements OnInit {
  contactRequestDtl: any = [];
  constructor(public rest: RestService,public router: Router) { }

  ngOnInit() {
    this.contactRequestData();
  }
  backButton(){
    this.router.navigate(['/home-page'])
  }
  contactRequestData(){
          this.rest.contactRequestData().then(data => {
            this.contactRequestDtl = data;
            if (this.contactRequestDtl!='') {
            }
            else {
              this.rest.presentAlert1("Message", "No Data Found!");
            }

})
  }
}
