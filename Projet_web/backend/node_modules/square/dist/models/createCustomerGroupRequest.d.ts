import { Schema } from '../schema';
import { CustomerGroup } from './customerGroup';
/**
 * Defines the body parameters that can be provided in a request to the
 * [CreateCustomerGroup](#endpoint-createcustomegroup) endpoint.
 */
export interface CreateCustomerGroupRequest {
    /**
     * The idempotency key for the request. See the [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency)
     * guide for more information.
     */
    idempotencyKey?: string;
    /**
     * Represents a group of customer profiles.
     * Customer groups can be created, modified, and have their membership defined either via
     * the Customers API or within Customer Directory in the Square Dashboard or Point of Sale.
     */
    group: CustomerGroup;
}
export declare const createCustomerGroupRequestSchema: Schema<CreateCustomerGroupRequest>;
