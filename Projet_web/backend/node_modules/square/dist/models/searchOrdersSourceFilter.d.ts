import { Schema } from '../schema';
/** Filter based on order `source` information. */
export interface SearchOrdersSourceFilter {
    /**
     * Filters by [Source](#type-ordersource) `name`. Will return any orders
     * with with a `source.name` that matches any of the listed source names.
     * Max: 10 source names.
     */
    sourceNames?: string[];
}
export declare const searchOrdersSourceFilterSchema: Schema<SearchOrdersSourceFilter>;
