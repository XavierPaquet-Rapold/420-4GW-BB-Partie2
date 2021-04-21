import { Schema } from '../schema';
/**
 * Filter based on Order `customer_id` and any Tender `customer_id`
 * associated with the Order. Does not filter based on the
 * [FulfillmentRecipient](#type-orderfulfillmentrecipient) `customer_id`.
 */
export interface SearchOrdersCustomerFilter {
    /**
     * List of customer IDs to filter by.
     * Max: 10 customer IDs.
     */
    customerIds?: string[];
}
export declare const searchOrdersCustomerFilterSchema: Schema<SearchOrdersCustomerFilter>;
