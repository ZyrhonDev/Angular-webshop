import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { IOrderRows } from 'src/app/models/IOrderRows';
import { RequestCatalogService } from 'src/app/services/apiRequests/request-catalog.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent implements OnInit {
  movies: IMovie[] = [];
  comedy: IMovie[] = [];
  orderRow: IOrderRows[] = [];
  amount: number = 0;

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
       if (this.movies[i].productCategory[f].categoryId === 7) {
         this.comedy.push(this.movies[i]);
       }
     }
   }
 }
 sendOrders(product: number) {
    let rowOrder: IOrderRows =  {
      productId: product,
      product: '',
      amount: 1,
      orderId: 0,
    }
    this.orderService.getOrders(rowOrder);
  }
}
