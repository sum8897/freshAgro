import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SingleproductdetailsComponent } from './pages/singleproductdetails/singleproductdetails.component';
import { ProductcategoryComponent } from './pages/productcategory/productcategory.component';
import { CartComponent } from './pages/cart/cart.component';
import { SupportComponent } from './pages/support/support.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { PaypalComponent } from './pages/paypal/paypal.component';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@NgModule({
  declarations: [AppComponent,
                 LoginComponent,
                 MainpageComponent,
                 SingleproductdetailsComponent,
                 ProductcategoryComponent,
                 CartComponent,
                 SupportComponent,
                 UserprofileComponent,
                 PaypalComponent
                 ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    NativeGeocoder,
    PayPal,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
