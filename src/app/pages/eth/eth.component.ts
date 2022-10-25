import { Component, OnInit } from '@angular/core';
import coins from '../../../assets/data.json'
import {Coin} from '../../interfaces/coin.model'

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css']
})
export class EthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coins:Coin[] = coins;
}
