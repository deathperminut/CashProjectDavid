import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/interfaces/coin.model';
import coins from '../../../assets/data.json'

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.css']
})
export class BtcComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  coins:Coin[] = coins;

}
