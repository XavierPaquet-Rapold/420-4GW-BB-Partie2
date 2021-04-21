import { Schema } from '../schema';
/**
 * Represents a group of customer profiles.
 * Customer groups can be created, modified, and have their membership defined either via
 * the Customers API or within Customer Directory in the Square Dashboard or Point of Sale.
 */
export interface CustomerGroup {
    /** Unique Square-generated ID for the customer group. */
    id?: string;
    /** Name of the customer group. */
    name: string;
    /** The timestamp when the customer group was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the customer group was last updated, in RFC 3339 format. */
    updatedAt?: string;
}
export declare const customerGroupSchema: Schema<CustomerGroup>;
