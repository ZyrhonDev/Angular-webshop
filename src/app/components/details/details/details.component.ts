import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IMovie } from 'src/app/models/IMovie';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRows } from 'src/app/models/IOrderRows';
import { RequestCatalogService } from 'src/app/services/apiRequests/request-catalog.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productId: number = 0;
  movie: IMovie[] = [];

  private orders = new Subject<IMovie>();
  orders$ = this.orders.asObservable();

  constructor(private route: ActivatedRoute, private service: RequestCatalogService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.productId = +p['id'];
    });
    
    this.service.movies$.subscribe((moviesFromApi: IMovie[]) => {
      for (let i = 0; i < moviesFromApi.length; i++) {
        if (moviesFromApi[i].id === this.productId) {
          this.movie.push(moviesFromApi[i])
        }

      }
    });
    this.service.getProducts();
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
