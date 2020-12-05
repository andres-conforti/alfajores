import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import {Alfajor} from '../alfajores-list/alfajor';//nose si va

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.css']
})
export class InputCantidadComponent implements OnInit {

  constructor() { }

  @Input()
  quantity:number;

  @Input()
  max:number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxAlfajores: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  upQuantity(): void{
    if (this.quantity<this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
    }
    else
      this.maxAlfajores.emit("Se alcanzo el maximo");
  }
  downQuantity(): void{
   if (this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}