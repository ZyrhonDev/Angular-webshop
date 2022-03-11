export class IOrderRows {
    productId: number;
    product: string = '';
    amount: number;
    orderId: number = 0;

    constructor(productId: number, amount: number) {
        this.productId = productId;
        this.amount = amount;
    }

}