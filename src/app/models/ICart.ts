import { IMovie } from "./IMovie";

export interface ICart {
    movie: IMovie[];
    amount: number;
}