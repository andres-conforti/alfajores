import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alfajor } from './alfajores-list/Alfajor';

@Injectable({
  providedIn: 'root'
})

export class AlfajorCartService {
  private _cartList: Alfajor[] = [];
  cartList: BehaviorSubject<Alfajor[]> = new BehaviorSubject([]);
  constructor() {}

  addToCart(product: Alfajor){
   let item: Alfajor = this._cartList.find((v1)=>(v1.name == product.name));
   if(!item){
    this._cartList.push({... product});} 
  
   else{
     item.quantity += product.quantity;}

   console.log(this._cartList);
   this.cartList.next(this._cartList);}
  }