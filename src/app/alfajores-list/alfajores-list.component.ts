import { Component, OnInit } from '@angular/core';
import {Alfajor} from './alfajor';
import {AlfajorCartService} from '../alfajor-carrito.service';
@Component({
  selector: 'app-alfajores-list',
  templateUrl: './alfajores-list.component.html',
  styleUrls: ['./alfajores-list.component.css']
})
export class AlfajoresListComponent implements OnInit {
  alfajores: Alfajor []=[ 
  {
    name: "Bon o Bon",
    stock: 5,
    price: 40,
    quantity: 0,
    image: "assets/img/bonobon.jpg",
  },
  {
    name: "Aguila",
    stock: 2,
    price: 60,
    quantity: 0,
    image: "assets/img/aguila.jpg",
  },
  {
    name: "Oreo",
    stock: 3,
    price: 50,
    quantity: 0,
    image: "assets/img/oreo.jpg",
  },
  ]

  constructor(private cart: AlfajorCartService) { }

  ngOnInit(): void {
  }

  addToCart(producto: Alfajor):void {
    if(producto.quantity!=0){
      this.cart.addToCart(producto);
      producto.stock -=producto.quantity;
      producto.quantity = 0;
    }
  }

  maxProducts(m: string){
    alert(m);
  }
}
