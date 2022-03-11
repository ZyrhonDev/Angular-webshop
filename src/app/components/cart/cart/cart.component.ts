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

  constructor(private orderService: OrdersService, private service: RequestCatalogService) { }

  ngOnInit(): void {
    this.service.movies$.subscribe((moviesFromApi: IMovie[]) => {
      this.movies = moviesFromApi;
    });
    this.orderService.orders$.subscribe((data: IOrderRows) => {
      this.sendToCart(data);
      this.sortMovies();
    });
  }

  removeProduct(i: number, p: number) {
    this.actualMovies.splice(i,1);
    this.cartOrders.splice(i, 1);
    this.totalPrice -= p;
  }

  sendOrders() {
    this.orderService.getCheckout(this.cartOrders);
  }

  sendPrice() {
    this.orderService.getPrice(this.totalPrice)
  }

  sortMovies() {
    for (let c = 0; c < this.cartOrders.length; c++) {
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].id === this.cartOrders[c].productId && !this.actualMovies.find(o => o.id === this.movies[i].id)) {
          this.actualMovies.push(this.movies[i]);
          this.totalPrice += this.movies[i].price;
        }
      }
    }
  }

  sendToCart(data: IOrderRows) {
    if (this.cartOrders.length < 1 || !this.cartOrders.find(o => o.productId === data.productId)) {
      this.cartOrders.push(data)
    } else {
      for (let i = 0; i < this.cartOrders.length; i++) {
        if (this.cartOrders[i].productId === data.productId) {
          this.cartOrders[i].amount++;
        }
      }
  }
  }
}
