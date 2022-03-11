import { IMovie } from "./IMovie";

export interface ICartOrder {
    product: IMovie[];
    amount: number;
}