import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRows } from 'src/app/models/IOrderRows';
import { RequestCatalogService } from 'src/app/services/apiRequests/request-catalog.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutList: IOrderRows[] = [];
  orderToSend: IOrder[] = [];
  sendOrder: IOrder[] = [];
  movies: IMovie[] = [];
  actualMovies: IMovie[] = [];

  constructor(private orderService: OrdersService, private service: RequestCatalogService) { }

  ngOnInit(): void {     
    this.service.movies$.subscribe((moviesFromApi: IMovie[]) => {
    this.movies = moviesFromApi;
    this.sortMovies();
  });
  this.service.getProducts();
    this.orderService.checkoutOrders$.subscribe((data: IOrderRows[]) => {
      this.checkoutList = data;
    });
  }

  populateOrdersToSend() {
  }

  sortMovies() {
    for (let i = 0; i < this.movies.length; i++) {
      for (let c = 0; c < this.checkoutList.length; c++) {
        if (this.movies[i].id === this.checkoutList[c].productId) {
          this.actualMovies.push(this.movies[i]);
        }
      }
    }
  }
}
