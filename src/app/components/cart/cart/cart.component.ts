import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/ICart';
import { ICartOrder } from 'src/app/models/ICartOrder';
import { IMovie } from 'src/app/models/IMovie';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRows } from 'src/app/models/IOrderRows';
import { RequestCatalogService } from 'src/app/services/apiRequests/request-catalog.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartOrders: IOrderRows[] = [];
  totalPrice: number = 0;
  movies: IMovie[] = [];
  actualMovies: IMovie[] = [];

  constructor(private orderService: OrdersService, private Service: RequestCatalogService) { }

  ngOnInit(): void {
    this.orderService.orders$.subscribe((data: IOrderRows) => {
      for (let i = 0; i < this.cartOrders.length; i++) {
        if (data.productId === this.cartOrders[i].productId) {
          this.cartOrders[i].amount++;
        } else {
          this.cartOrders.push(data)
        }
      }
      // this.totalPrice += data.price;
    });
  }

  removeProduct(i: number, p: number) {
    this.cartOrders.splice(i,1);
    this.totalPrice -= p;
  }

  sendOrders() {
    this.orderService.getCheckout(this.cartOrders);
    // for (let i = 0; i < this.cartOrders.length; i++) {
      
    // }
  }

  sortMovies() {
    for (let i = 0; i < this.movies.length; i++) {
      for (let c = 0; c < this.cartOrders.length; c++) {
        if (this.movies[i].id === this.cartOrders[c].productId) {
          this.actualMovies.push(this.movies[i]);
        }
      }
    }
  }
}
