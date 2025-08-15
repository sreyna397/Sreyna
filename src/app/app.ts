import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ProductCard } from './product-card/product-card';
import { RouterLink } from '@angular/router';
import { Home } from './home/home';
import { CartService } from './Service/cart-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductCard, RouterLink, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public cartService: CartService) {}
}
