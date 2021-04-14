import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  // Readable Address
  address: string;
  flower:boolean=true;
  special:boolean=false;

  // Location coordinates
  latitude: number;
  longitude: number;
  accuracy: number;

  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private navCtrl: NavController) {
    this.getGeolocation();
  }

  ngOnInit() { }

  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail.value);
    if(event.detail.value=="bouquet"){
      console.log("radioGroupChange",event.detail.value);
      this.flower=false;
      this.special=true;
    }
    else if(event.detail.value=="flowers"){
      console.log("radioGroupChange",event.detail.value);
      this.flower=true;
      this.special=false;
    }
    // this.selectedRadioGroup = event.detail;
  }
  private buttonSlides = {
    slidesPerView: 2.3,
    initialSlide: 0,
  }
  private buttonSlides1 = {
    slidesPerView: 2.7,
    initialSlide: 0,
  }
  private buttonSlides3 = {
    slidesPerView: 1.9,
    initialSlide: 0,
  }
  flowercard = [
    {
      id: '1',
      name: 'A pumpy from santa',
      img: '../../../assets/flowers/product_details.jpg'
      
      
    }, {
      id: '2',
      name: 'Box of roses',
      img: '../../../assets/icon/app.jpg'

      
    }, {
      id: '3',
      name: 'special flowers',
      img: '../../../assets/icon/app.jpg'
    },{
      id: '4',
      name: 'flower another',
      img: '../../../assets/icon/app.jpg'
    },
    {
      id: '5',
      name:'white rose',
      img: '../../../assets/flowers/product_details.jpg'
    },
    {
      id: '6',
      name:'white rose 2',
      img: '../../../assets/flowers/product_img.jpg'
    },
    {
      id: '7',
      name:'white rose 6',
      img: '../../../assets/flowers/anniversary.png'
    },
    {
      id: '8',
      name:'BirthDay Special',
      img: '../../../assets/flowers/birthday.png'
    },
    {
      id: '9',
      name:'Large Product',
      img: '../../../assets/flowers/large_product.jpg'
    },
  ];

  specialEvent = [
    {
      id: '1',
      name: 'Valentine Day',
      img: '../../../assets/flowers/product_details.jpg'
      
      
    }, {
      id: '2',
      name: 'Anniversary',
      img: '../../../assets/icon/app.jpg'

      
    }, {
      id: '3',
      name: 'BirthDays',
      img: '../../../assets/icon/app.jpg'
    },{
      id: '4',
      name: 'Rose Days',
      img: '../../../assets/icon/app.jpg'
    },
    {
      id: '5',
      name:'Hug Days',
      img: '../../../assets/flowers/product_details.jpg'
    },
    {
      id: '6',
      name:'Saturday',
      img: '../../../assets/flowers/product_img.jpg'
    },
    {
      id: '7',
      name:'Product Days',
      img: '../../../assets/flowers/anniversary.png'
    },
    {
      id: '8',
      name:'Mother Days',
      img: '../../../assets/flowers/birthday.png'
    },
    {
      id: '9',
      name:'Fathers Days',
      img: '../../../assets/flowers/large_product.jpg'
    },
  ];







  //Get current coordinates of device
  getGeolocation() {
    console.log('latitude call..');
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;
     console.log("lati:"+ this.latitude);
     console.log("long"+ this.longitude)

      this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
      console.log('erroen')
    });
  }

  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
        alert("current Address:"+ this.address);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }
productdetails(){
  // singleproductdetails
  // productcategory
  console.log('product details..');
  this.navCtrl.navigateRoot('/singleproductdetails'); 
}
special1(){
  console.log('special click');
  this.navCtrl.navigateRoot('/productcategory'); 
}

}
