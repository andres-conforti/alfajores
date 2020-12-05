import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AlfajoresListComponent } from './alfajores-list/alfajores-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AboutComponent } from './about/about.component';
import { InputCantidadComponent } from './input-cantidad/input-cantidad.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlfajoresListComponent,
    CarritoComponent,
    AboutComponent,
    InputCantidadComponent,
    ProductosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
