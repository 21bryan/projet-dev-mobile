import { Injectable } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalisationService {

  private currentLocationSubject = new BehaviorSubject<GeolocationPosition | null>(null);
  currentLocation$ = this.currentLocationSubject.asObservable();

  constructor() {}

  async getCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.currentLocationSubject.next(position);
    } catch (error) {
      console.error('Error getting current location', error);
    }
  }

  watchLocation() {
    const watchId = Geolocation.watchPosition({}, (position, err) => {
      if (err) {
        console.error('Error watching location', err);
      } else {
        this.currentLocationSubject.next(position);
      }
    });

    return watchId;
  }

  clearWatch(watchId: string) {
    Geolocation.clearWatch({ id: watchId });
  }
}

