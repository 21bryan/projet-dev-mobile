import { Component, OnInit } from '@angular/core';
import { LocalisationService } from 'src/app/services/localisation.service';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
import { GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {

  constructor(private local: LocalisationService ) { }

  map: GoogleMap;
  apiKey: string = 'AIzaSyBtt01FLh3IV-cQyofd0w8zUQOFKUr6944';
  

  ngOnInit() {
    this.loadMap();
  }
  
  async getCurrentLocation() {
    try {
      const position: GeolocationPosition = await Geolocation.getCurrentPosition();
      const latitude: number = position.coords.latitude;
      const longitude: number = position.coords.longitude;

      return { latitude, longitude };
    } catch (error) {
      console.error('Error getting current location', error);
      return null;
    }
  }
  async loadMap() {
    const location = await this.getCurrentLocation();

    if (location) {
      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: location.latitude,
            lng: location.longitude
          },
          zoom: 15
        }
      };

      this.map = GoogleMaps.create('map', mapOptions);

      const marker: Marker = this.map.addMarkerSync({
        title: 'Ma position',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: location.latitude,
          lng: location.longitude
        }
      });

      marker.showInfoWindow();

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map is ready!');
      });
    }
  }

}


