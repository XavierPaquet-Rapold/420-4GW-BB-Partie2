import { Schema } from '../schema';
import { Order } from './order';
export interface CreateOrderRequest {
    /**
     * Contains all information related to a single order to process with Square,
     * including line items that specify the products to purchase. Order objects also
     * include information on any associated tenders, refunds, and returns.
     * All Connect V2 Transactions have all been converted to Orders including all associated
     * itemization data.
     */
    order?: Order;
    /**
     * A value you specify that uniquely identifies this
     * order among orders you've created.
     * If you're unsure whether a particular order was created successfully,
     * you can reattempt it with the same idempotency key without
     * worrying about creating duplicate orders.
     * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotencyKey?: string;
}
export declare const createOrderRequestSchema: Schema<CreateOrderRequest>;
