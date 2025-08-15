import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../Service/cart-service';
import { ProductService } from '../Service/product-service';

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(
    public cartService: CartService,
    public productService: ProductService
  ) {}

  addToCart(item:any){
    this.cartService.addToCart(item)
  }
}
