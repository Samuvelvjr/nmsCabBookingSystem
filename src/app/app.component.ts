import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.changeStatusBar();
  }
  changeStatusBar() {
    // Display content under transparent status bar (Android only)
    StatusBar.setOverlaysWebView({
      overlay: true
    });
  }
}
