import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  btcPage:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  isEthPage():void{
    this.btcPage = false;
  }

  isBtcPage():void{
    this.btcPage = true;
  }

}
