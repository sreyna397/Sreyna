import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JsonPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [JsonPipe, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product: any;
  @Output() addToCartEvent:EventEmitter<any> = new EventEmitter<any>();
  addToCart(item:any):void {
    this.addToCartEvent.emit(item);
  }
  

}
