import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleproductdetails',
  templateUrl: './singleproductdetails.component.html',
  styleUrls: ['./singleproductdetails.component.scss'],
})
export class SingleproductdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  private buttonSlides3 = {
    slidesPerView: 1.0,
    initialSlide: 0,
    autoplay:true,
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

}
