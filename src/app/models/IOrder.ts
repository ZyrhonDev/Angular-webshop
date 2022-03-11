import { IMovie } from "./IMovie";
import { IOrderRows } from "./IOrderRows";

export class IOrder {
    id: number = 0;
    companyId: number = 31;
    created: Date = new Date();
    createdBy: string = "Oskar Lundberg";
    paymentMethod: string = "PayPal";
    totalPrice: number = 0;
    status: number = 0;
    orderRows: [{productId: number, amount: number}];

    constructor(myOrderRow: [{productId: number, amount: number}]){
        this.orderRows = myOrderRow;
    }
}