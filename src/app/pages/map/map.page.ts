import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { LoadingController } from '@ionic/angular';
import { Popup, Marker, Map } from 'mapbox-gl';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Router } from '@angular/router';
import { coordinates } from '@core/helpers';

@Component({
  templateUrl: './map.page.html'
})
export class MapPage implements OnInit {

  private mapRef: Map;

  markers: Marker[] = [];

  constructor(
    private readonly loader: LoadingController,
    private readonly router: Router
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
      this.drawSelectedRoute();
      loader.dismiss();
    });
  }

  private drawSelectedRoute() {
    const geojson: any = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'properties': {},
            coordinates: coordinates
          }
        }
      ]
    };

    this.mapRef.addSource('LineString', {
      type: 'geojson',
      data: geojson
    });

    this.mapRef.addLayer({
      'id': 'LineString',
      'type': 'line',
      'source': 'LineString',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#28ba62',
        'line-width': 8
      }
    });

    coordinates.filter((_, i) => i % 25 === 0).forEach((x, i) => {
      const isFirst = i === 0;
      const popup = new Popup({ closeButton: true });
      popup.setText('Mi posición');

      this.markers.push(new Marker({ element: this.getMarkerIcon('Parada ' + i) })
        .setPopup(isFirst && popup)
        .setLngLat({ lat: x[1], lng: x[0],})
        .addTo(this.mapRef));

      if (isFirst) {
        popup.addTo(this.mapRef);
      }
    })
  }

  private getMarkerIcon(title: string) {
    const img = document.createElement('img');
    img.src = 'https://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/512/Circle-icon.png';
    img.width = 24;
    img.height = 24;
    //
    const span = document.createElement('span');
    span.className = 'mapbox-marker-title';
    span.innerText = title;
    //
    const div = document.createElement('div');
    div.className = 'ion-flex ion-flex-column ion-align-items-center marker';
    div.append(img);

    return div;
  }

  async onStart() {
    try {
      await LocalNotifications.schedule({
        notifications: [{
          title: 'Camina hasta C/1ra proxima C/Primera',
          body: '8.2 km',
          id: 1,
          iconColor: '#2dd36f'
        }]
      });
    } catch(error) {
      console.error(error);
    }

    this.router.navigate(['/app/preview']);
  }

  goToInitial() {
    this.mapRef?.flyTo({ center: this.markers[0].getLngLat(), zoom: 16 })
  }

}
