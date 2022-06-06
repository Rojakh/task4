import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  constructor() { }
 products:Product[]= [
    {
      "domain":"app.com",
      "price":"$45",
   "clicks":"3330",
   "update":"Feb 12",
   "status":"Expiring"
      },
  
    {
      "domain":"base.com",
   "price":"$35",
   "clicks":"2959",
   "update":"Feb 18",
   "status":"Registered"
    },
    {
      "domain":"max.com",
   "price":"$60",
   "clicks":"4400",
   "update":"Mar 11",
   "status":"Expiring"
    },
    {
      "domain":"best.com",
   "price":"$75",
   "clicks":"6500",
   "update":"Apr 03",
   "status":"Flagged"
    },
    {
      "domain":"pro.com",
   "price":"$55",
   "clicks":"4250",
   "update":"Jan 21",
   "status":"Registered"
    },
    {
      "domain":"team.com",
      "price":"$40",
      "clicks":"3200",
      "update":"Feb 09",
      "status":"Flagged"
    },
    {
      "domain":"up.com",
   "price":"$95",
   "clicks":"8520",
   "update":"Feb 22",
   "status":"Sold"
    },
    {
    "domain":"view.com",
   "price":"$45",
   "clicks":"4100",
   "update":"Mar 12",
   "status":"Registered"
    },
    {
      "domain":"nice.com",
   "price":"$38",
   "clicks":"3940",
   "update":"Feb 12",
   "status":"Sold"
    },
    {
      "domain":"fine.com",
      "price":"$25",
      "clicks":"2983",
      "update":"Apr 01",
      "status":"Expiring"
    },
    {
      "domain":"app.com",
      "price":"$45",
      "clicks":"3330",
      "update":"Feb 12",
      "status":"expiring"
    },
    {
      "domain":"bpp.com",
   "price":"$45",
   "clicks":"3330",
   "update":"Feb 12",
   "status":"expiring"
    }
    
  ]
  ngOnInit(): void {
    
  }

}