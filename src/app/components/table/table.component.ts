import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../../interfaces/coin.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() coins: Coin[] = [];
  constructor() { }


  ngOnInit(): void {
  }

  sendInformation(data:object){
    console.log(data);

  }
}
