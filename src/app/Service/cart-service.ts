import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart_list: any[] = [];
  constructor() {
    this.cart_list = JSON.parse(localStorage.getItem('cart_list') ?? '[]');
  }

  getCartList(): any[] {
    return this.cart_list;
  }

  addToCart(item: any): void {
    item.quantity = 1;
    let isExist: any = this.cart_list.find((cartItem: any) => cartItem.id === item.id);
    if (isExist) {
      isExist.quantity ++;
      let index:number = this.cart_list.indexOf(isExist);
      localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
      this.cart_list[index] = isExist;
    }
    else{
      this.cart_list.push(item);
    }
    
    localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
  }

  decreaseQuantity(item: any): void {
    let isExist: any = this.cart_list.find((cartItem: any) => cartItem.id === item.id);
    if (isExist && isExist.quantity > 1) {
      isExist.quantity--;
      let index: number = this.cart_list.indexOf(isExist);
      localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
      this.cart_list[index] = isExist;
    } else if (isExist && isExist.quantity === 1) {
      this.removeFromCart(item);
    }
  }
  removeFromCart(item: any): void {
    let isExist: any = this.cart_list.find((cartItem: any) => cartItem.id === item.id);
    if (isExist) {
      let index: number = this.cart_list.indexOf(isExist);
      this.cart_list.splice(index, 1);
      localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
    }
  }

  increaseQuantity(item: any): void {
    let isExist: any = this.cart_list.find((cartItem: any) => cartItem.id === item.id);
    if (isExist) {
      isExist.quantity++;
      let index: number = this.cart_list.indexOf(isExist);
      localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
      this.cart_list[index] = isExist;
    }
  }

  getTotalPrice(): number {
    return this.cart_list.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  clearCart(): void {
    this.cart_list = [];
    localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
  }

}
