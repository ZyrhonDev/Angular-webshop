import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DetailsComponent } from 'src/app/components/details/details/details.component';
import { IMovie } from 'src/app/models/IMovie';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRows } from 'src/app/models/IOrderRows';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders = new Subject<IOrderRows>();
  orders$ = this.orders.asObservable();

  private checkoutOrders = new Subject<IOrderRows[]>();
  checkoutOrders$ = this.checkoutOrders.asObservable();

  tempList: IOrder[] = [];

  constructor(private http: HttpClient) { }

  getOrders(order: IOrderRows) {
    this.orders.next(order);
  }

  getCheckout(orders: IOrderRows[]) {
    console.log(orders);
    this.checkoutOrders.next(orders);
    // for (let i = 0; i < orders.length; i++) {
    //   this.tempList[i].createdBy = 'Oskar Lundberg';
    //   this.tempList[i].created = new Date();
    //   this.tempList[i].paymentMethod = 'Paypal';
    //   this.tempList[i].orderRows.productId = orders[i].id;
    //   this.tempList[i].orderRows.product = orders[i].name;
    //   this.tempList[i].orderRows.amount++;
    //   this.tempList[i].totalPrice += orders[i].price;
    // }
    // this.checkoutOrders.next(this.tempList);
  }
}
