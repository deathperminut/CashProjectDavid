import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/interfaces/coin.model';
import coins from '../../../assets/data.json'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coins:Coin[] = coins
}
