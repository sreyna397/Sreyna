import { Component, OnInit} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../Service/cart-service';

@Component({
  selector: 'app-cart',
  imports: [JsonPipe, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {}
  
}
