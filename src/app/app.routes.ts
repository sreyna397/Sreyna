import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },

    {
        path: 'cart',
        component: Cart
    }
];
