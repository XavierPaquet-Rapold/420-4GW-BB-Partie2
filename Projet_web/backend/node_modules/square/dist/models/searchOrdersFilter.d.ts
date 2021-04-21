import { Schema } from '../schema';
import { SearchOrdersCustomerFilter } from './searchOrdersCustomerFilter';
import { SearchOrdersDateTimeFilter } from './searchOrdersDateTimeFilter';
import { SearchOrdersFulfillmentFilter } from './searchOrdersFulfillmentFilter';
import { SearchOrdersSourceFilter } from './searchOrdersSourceFilter';
import { SearchOrdersStateFilter } from './searchOrdersStateFilter';
/**
 * Filtering criteria to use for a SearchOrders request. Multiple filters
 * will be ANDed together.
 */
export interface SearchOrdersFilter {
    /** Filter by current Order `state`. */
    stateFilter?: SearchOrdersStateFilter;
    /**
     * Filter for `Order` objects based on whether their `CREATED_AT`,
     * `CLOSED_AT` or `UPDATED_AT` timestamps fall within a specified time range.
     * You can specify the time range and which timestamp to filter for. You can filter
     * for only one time range at a time.
     * For each time range, the start time and end time are inclusive. If the end time
     * is absent, it defaults to the time of the first request for the cursor.
     * __Important:__ If you use the DateTimeFilter in a SearchOrders query,
     * you must also set the `sort_field` in [OrdersSort](#type-searchorderordersort)
     * to the same field you filter for. For example, if you set the `CLOSED_AT` field
     * in DateTimeFilter, you must also set the `sort_field` in SearchOrdersSort to
     * `CLOSED_AT`. Otherwise, SearchOrders will throw an error.
     * [Learn more about filtering orders by time range](https://developer.squareup.com/docs/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range).
     */
    dateTimeFilter?: SearchOrdersDateTimeFilter;
    /** Filter based on [Order Fulfillment](#type-orderfulfillment) information. */
    fulfillmentFilter?: SearchOrdersFulfillmentFilter;
    /** Filter based on order `source` information. */
    sourceFilter?: SearchOrdersSourceFilter;
    /**
     * Filter based on Order `customer_id` and any Tender `customer_id`
     * associated with the Order. Does not filter based on the
     * [FulfillmentRecipient](#type-orderfulfillmentrecipient) `customer_id`.
     */
    customerFilter?: SearchOrdersCustomerFilter;
}
export declare const searchOrdersFilterSchema: Schema<SearchOrdersFilter>;
