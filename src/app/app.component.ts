import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  locationCoords: any;
  timetest: any;
  constructor(private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
    private fcm:FCM
  ) {
    this.sideMenu();
    this.initializeApp();
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }
    this.timetest = Date.now();
    this.checkGPSPermission();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushSetup();
    });
  }

  //Check if application having GPS access permission  
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  // Methos to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
      alert(this.locationCoords.latitude)
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        // url   : "/home",
        icon  : "home"
      },
      {
        title : "product details",
        url   : "/singleproductdetails",
        icon  : "add"
      },
      {
        title : "categories",
        url   : "/productcategory",
        icon  : "call"
      },
      {
        title : "Grid View",
        url   : "/cart",
        icon  : "cart"
      },
      {
        title : "Help & Support",
        url   : "/support",
        icon  : "help-outline"
      },
      {
        title : "profile",
        url   : "/userprofile",
        icon  : "person-outline"
      },
      {
        title : "payment",
        url   : "/payment",
        icon  : "person-outline"
      },
    ]
  }
token;
hasPermission;
  private async pushSetup() {
    await this.platform.ready();

    console.log('FCM SETUP INIT');
    if (!this.platform.is('cordova')) {
      return;
    }

    console.log('IN CORDOVA');

    this.hasPermission = await this.fcm.requestPushPermission();
    console.log('CHECK hasPermission:', this.hasPermission);

    this.token = await this.fcm.getToken();
    console.log('CHECK getToken: ' + this.token);
    alert('CHECK getToken: ' + this.token)
    console.log('ON NOTIFICATION SUBSCRIBE');
    this.fcm
      .onTokenRefresh()
      .subscribe((newToken) => alert('NEW TOKEN:'+ newToken));
    this.fcm
      .onNotification()
      .subscribe((payload: object) => console.log('ON NOTIFICATION:', payload));
  }
}
