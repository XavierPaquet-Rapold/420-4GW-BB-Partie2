import { Schema } from '../schema';
import { CustomerGroup } from './customerGroup';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [CreateCustomerGroup](#endpoint-createcustomergroup) endpoint.
 * One of `errors` or `group` is present in a given response (never both).
 */
export interface CreateCustomerGroupResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents a group of customer profiles.
     * Customer groups can be created, modified, and have their membership defined either via
     * the Customers API or within Customer Directory in the Square Dashboard or Point of Sale.
     */
    group?: CustomerGroup;
}
export declare const createCustomerGroupResponseSchema: Schema<CreateCustomerGroupResponse>;
