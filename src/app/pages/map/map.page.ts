import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { LoadingController } from '@ionic/angular';
import { Popup, Marker, Map } from 'mapbox-gl';

@Component({
  templateUrl: './map.page.html'
})
export class MapPage implements OnInit {

  private mapRef: Map;

  constructor(
    private readonly loader: LoadingController
  ) { }

  ngOnInit(): void {
    this.inicializeMap();
  }

  private async inicializeMap(): Promise<void> {
    const loader = await this.loader.create({ message: 'Cargando...' });
    await loader.present();

    this.mapRef = new Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.009422, 18.479149],
      zoom: 12,
      accessToken: environment.mapboxKey
    }).once('load', () => {
      this.mapRef.resize();
      loader.dismiss();
    });
  }

}
