import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getPermissions();
  }

  private async getPermissions() {
    try {
      await this.geolocationPermissions();
      await this.notificationPermissions();
    } catch(e) {
      console.error('PERMISIONS ERROR:\n', e);
    }
  }

  private async geolocationPermissions() {
    const granted = await Geolocation.requestPermissions();
    console.log(granted);
  }

  private async notificationPermissions() {
    const granted = await LocalNotifications.requestPermissions();
    console.log(granted);
  }
}
