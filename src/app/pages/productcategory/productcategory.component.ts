import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.scss'],
})
export class ProductcategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  flowercard = [
    {
      id: '1',
      name: 'A pumpy from santa',
      img: '../../../assets/flowers/product_details.jpg',
      price: 10,
      
      
    }, {
      id: '2',
      name: 'Box of roses',
      img: '../../../assets/icon/app.jpg',
      price: 20,
      
    }, {
      id: '3',
      name: 'special flowers',
      img: '../../../assets/icon/app.jpg',
      price: 100,
    },{
      id: '4',
      name: 'flower another',
      img: '../../../assets/icon/app.jpg',
      price: 102,
    },
    {
      id: '5',
      name:'white rose',
      img: '../../../assets/flowers/product_details.jpg',
      price: 500,
    },
    {
      id: '6',
      name:'white rose 2',
      img: '../../../assets/flowers/product_img.jpg',
      price: 200,
    },
    {
      id: '7',
      name:'white rose 6',
      img: '../../../assets/flowers/anniversary.png',
      price: 150,
    },
    {
      id: '8',
      name:'BirthDay Special',
      img: '../../../assets/flowers/birthday.png',
      price: 200,
    },
    {
      id: '9',
      name:'Large Product',
      img: '../../../assets/flowers/large_product.jpg',
      price: 90,
    },
  ];

}
