import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRows } from 'src/app/models/IOrderRows';
import { RequestCatalogService } from 'src/app/services/apiRequests/request-catalog.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  movies: IMovie[] = [];
  action: IMovie[] = [];
  // orderRow: IOrderRows[] = [];
  // amount: number = 0;

  constructor(private service: RequestCatalogService, private orderService: OrdersService) { }

  ngOnInit(): void {
     this.service.movies$.subscribe((moviesFromApi: IMovie[]) => {
      this.movies = moviesFromApi;
      this.sortMovies();
    });
    this.service.getProducts();
  }

  sortMovies() {
    for (let i = 0; i < this.movies.length; i++) {
      for (let f = 0; f < this.movies[i].productCategory.length; f++) {
        if (this.movies[i].productCategory[f].categoryId === 5) {
          this.action.push(this.movies[i]);
        }
      }
    }
  }
  sendOrders(product: number) {
    let rowOrder: IOrderRows =  {
      id: 0,
      productId: product,
      product: '',
      amount: 1,
      orderId: 0,
    }
    
    this.orderService.getOrders(rowOrder);
  }
}
