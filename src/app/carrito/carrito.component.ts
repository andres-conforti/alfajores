import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlfajorCartService } from '../alfajor-carrito.service';
import { Alfajor } from '../alfajores-list/alfajor';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  
  cartList$: Observable <Alfajor[]>;
  
  constructor(private cart: AlfajorCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }
  
}