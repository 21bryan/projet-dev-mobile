import { Injectable } from '@angular/core';
import { PushNotifications, TokenResult } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() {}

  initPushNotifications() {
    PushNotifications.requestPermissions().then((permission) => {
      if (permission.granted) {
        this.registerPush();
      }
    });
  }

  private registerPush() {
    PushNotifications.register().then((token: TokenResult) => {
      console.log('Push registration success, token: ' + token.value);
      
    });

    PushNotifications.addListener('registration', (token: TokenResult) => {
      console.log('Push registration success, token: ' + token.value);
      
    });

    PushNotifications.addListener('pushNotificationReceived', (notification: any) => {
      console.log('Push received: ' + JSON.stringify(notification));
      // notification reçue ici
    });
  }

  scheduleNotification(title: string, body: string, timestamp: number) {
    PushNotifications.schedule({
      notifications: [
        {
          title,
          body,
          id: new Date().getTime(),
          schedule: { at: new Date(timestamp) },
        },
      ],
    });
  }
}