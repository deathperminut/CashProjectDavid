import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { BtcComponent } from './pages/btc/btc.component';
import { EthComponent } from './pages/eth/eth.component';
import { HomeComponent } from './pages/home/home.component'; 


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'Form',component:FormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    FormComponent,
    BtcComponent,
    EthComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
