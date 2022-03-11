import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DetailsComponent } from 'src/app/components/details/details/details.component';
import { IMovie } from 'src/app/models/IMovie';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRows } from 'src/app/models/IOrderRows';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders = new Subject<IOrderRows>();
  orders$ = this.orders.asObservable();

  private checkoutOrders = new Subject<IOrderRows[]>();
  checkoutOrders$ = this.checkoutOrders.asObservable();

  private totalPrice = new Subject<number>();
  totalPrice$ = this.totalPrice.asObservable();

  orderToSend: IOrder = {
    id: 0,
      companyId: 31,
      created:  new Date(),
      createdBy:  "Oskar Lundberg",
      paymentMethod:  "PayPal",
      totalPrice:  0,
      status:  0,
      orderRows: [] = [],
  }
  constructor(private http: HttpClient) { }

  getOrders(order: IOrderRows) {
    this.orders.next(order);
  }

  getPrice(price: number) {
    this.totalPrice.next(price);
  }

  getCheckout(orders: IOrderRows[]) {
    this.checkoutOrders.next(orders);
  }

  sendOrders(data: IOrderRows[]) {
    for (let i = 0; i < data.length; i++) {
    this.orderToSend = {
      id: 0,
      companyId: 31,
      created:  new Date(),
      createdBy:  "Oskar Lundberg",
      paymentMethod:  "PayPal",
      totalPrice:  0,
      status:  0,
      orderRows: [], // Min hjärna har tagit slut här, snubblar väl på mållinjen men jag har bara trasslat ihop allt nu.
    }
  }
     return this.http.post<IOrder[]>(environment.apiOrdersURL, this.orderToSend).subscribe();
  }
}

