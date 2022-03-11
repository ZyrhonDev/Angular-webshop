import { IMovie } from "./IMovie";
import { IOrderRows } from "./IOrderRows";

export interface IOrder {
    id: number;
    companyId: 31;
    created: Date;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderRows[];
}