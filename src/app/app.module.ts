import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { BtcComponent } from './pages/btc/btc.component';
import { EthComponent } from './pages/eth/eth.component';
import { HomeComponent } from './pages/home/home.component'; // IMPORTAMOS PARA GENERAL LAS RUTAS

// CREAMOS MI CONSTANTE DE RUTAS
// AL INICIO NO RECONOCE LA CLASE ROUTES PORQUE TOCA IMPORTARLA
// DEL PAQUETE DE ANGULAR.

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
    RouterModule.forRoot(appRoutes) // LE ENVIAMOS LA CONSTANTE CON MIS RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
