import { Component, OnInit } from '@angular/core';
import { Coin } from './coin.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  coins: Coin[] =[
    {
      coin_name:"ETH",
      arbitrage_percentage:"0.03261%",
      state:true,
      quantity:0.0005,
      action:"Send Order"
    },
    {
      coin_name:"DOT",
      arbitrage_percentage:"0.5564%",
      state:false,
      quantity:0.0005,
      action:"Send Order"
    },
    {
      coin_name:"LTC",
      arbitrage_percentage:"0.08792%",
      state:false,
      quantity:0.0005,
      action:"Send Order"
    },
    {
      coin_name:"LINK",
      arbitrage_percentage:"0.07989%",
      state:true,
      quantity:0.0005,
      action:"Send Order"
    },
    {
      coin_name:"SUSHI",
      arbitrage_percentage:"0.10797%",
      state:false,
      quantity:0.0005,
      action:"Send Order"
    },
    {
      coin_name:"XRP",
      arbitrage_percentage:"0.05246%",
      state:false,
      quantity:0.0005,
      action:"Send Order"
    },
    {
      coin_name:"AVAX",
      arbitrage_percentage:"0.10797%",
      state:true,
      quantity:0.0005,
      action:"Send Order"
    },
    {
      coin_name:"BNB",
      arbitrage_percentage:"0.05768%",
      state:false,
      quantity:0.0005,
      action:"Send Order"
    },
    {
      coin_name:"UNI",
      arbitrage_percentage:"0.03419%",
      state:true,
      quantity:0.0005,
      action:"Send Order"
    }

  ]

  send(){

  }
}