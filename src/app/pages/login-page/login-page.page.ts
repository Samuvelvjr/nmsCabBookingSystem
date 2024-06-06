import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  userId: string = "";
  password: string = "";
  userDetails: any = [];
  passwordType: any = "password";
  todayDate: any;

  constructor(public rest: RestService,public router: Router,public datePipe : DatePipe) { }

  ngOnInit() {
    this.todayLogin()
  }
  todayLogin(){
    const currentDate = new Date();
    this.todayDate = this.datePipe.transform(currentDate, 'dd-MM-yyyy')
    
    if(this.todayDate == localStorage.getItem("loginTodayDate")){
      this.router.navigate(['/home-page'])
    }
  }
  submit(){
    if (this.userId != "" && this.password != "") {
          this.rest.New_Login(this.userId, this.password).then(data => {
            this.userDetails = data;
            if (this.userDetails.status == 111) {
              localStorage.setItem("loginAdminName", (this.userId));
              localStorage.setItem("loginTodayDate", (this.todayDate));
              this.router.navigate(['/home-page'])
            }
            else {
              this.rest.presentAlert("Message", "Invalid credentials");
            }
          });
    }
    else {
      this.rest.presentAlert("Message", "Please Enter UserName & Password.");
    }
}

}
