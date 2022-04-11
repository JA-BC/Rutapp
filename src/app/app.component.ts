import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

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
    // try {
    //   const granted = await Geolocation.requestPermissions();
    //   console.log(granted);
    // } catch(e) {
    //   console.error('PERMISIONS ERROR:\n', e);
    // }
  }
}
