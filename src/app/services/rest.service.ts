import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, LoadingController } from '@ionic/angular';
let ApiUrl = "";
@Injectable({
  providedIn: 'root'
})

export class RestService {
  private baseUrl = "https://nmsdroptaxi.com/nmsapi/";
  constructor(public router: Router,public loadingCtrl: LoadingController,private http: HttpClient,public alertCtrl: AlertController) { }
  
  async New_Login(userId: string, password: string) {
    let loading = await this.loadingCtrl.create({
      spinner:'bubbles',
      // content:'<div class="cssload"></div>',
      backdropDismiss:false,
    });

    try {
      loading.present();
      // Example API request
      const response = await this.http.get(this.baseUrl + 'api.php?flag='+'7'+'&admin_name='+userId+'&admin_password='+password).toPromise();
      // Process the response if needed
  
      return response;
    } catch (error) {
      // Handle errors if needed
      await this.presentAlert1("ERORR","error");
    } finally {
      if (loading) {
        loading.dismiss();
      }
    }
  
    return null; // Default return statement
  }
  async todayCabBooking() {
    let loading = await this.loadingCtrl.create({
      spinner:'bubbles',
      // content:'<div class="cssload"></div>',
      backdropDismiss:false,
    });

    try {
      loading.present();
      // Example API request
      const response = await this.http.get(this.baseUrl + 'api.php?flag='+'3').toPromise();
      // Process the response if needed
  
      return response;
    } catch (error) {
      // Handle errors if needed
      await this.presentAlert1("ERORR","error");
    } finally {
      if (loading) {
        loading.dismiss();
      }
    }
  
    return null; // Default return statement
  }
  async cabBookingDetails() {
    let loading = await this.loadingCtrl.create({
      spinner:'bubbles',
      // content:'<div class="cssload"></div>',
      backdropDismiss:false,
    });

    try {
      loading.present();
      // Example API request
      const response = await this.http.get(this.baseUrl + 'api.php?flag='+'1').toPromise();
      // Process the response if needed
  
      return response;
    } catch (error) {
      // Handle errors if needed
      await this.presentAlert1("ERORR","error");
    } finally {
      if (loading) {
        loading.dismiss();
      }
    }
  
    return null; // Default return statement
  }
  async dateWiseReportDetails(from_date:string,to_date:string) {
    let loading = await this.loadingCtrl.create({
      spinner:'bubbles',
      // content:'<div class="cssload"></div>',
      backdropDismiss:false,
    });

    try {
      loading.present();
      // Example API request
      const response = await this.http.get(this.baseUrl + 'api.php?flag='+'9'+'&from_date='+from_date+'&to_date='+to_date).toPromise();
      // Process the response if needed
  
      return response;
    } catch (error) {
      // Handle errors if needed
      await this.presentAlert1("ERORR","error");
    } finally {
      if (loading) {
        loading.dismiss();
      }
    }
  
    return null; // Default return statement
  }
  async contactRequestData() {
    let loading = await this.loadingCtrl.create({
      spinner:'bubbles',
      // content:'<div class="cssload"></div>',
      backdropDismiss:false,
    });

    try {
      loading.present();
      // Example API request
      const response = await this.http.get(this.baseUrl + 'api.php?flag='+'6').toPromise();
      // Process the response if needed
  
      return response;
    } catch (error) {
      // Handle errors if needed
      await this.presentAlert1("ERORR","error");
    } finally {
      if (loading) {
        loading.dismiss();
      }
    }
  
    return null; // Default return statement
  }
  async presentAlert(title: string, msg: string) {

    let alert = await this.alertCtrl.create(<AlertOptions>{
      title: title,
      message: msg,
      cssClass: 'alertCustomCss',
      backdropDismiss:false,
      buttons: ['Ok']
    });

    await alert.present();
  }
  async presentAlert1(title: string, msg: string) {

    let alert = await this.alertCtrl.create(<AlertOptions>{
      title: title,
      message: msg,
      cssClass: 'alertCustomCss',
      backdropDismiss:false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
