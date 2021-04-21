import { Schema } from '../schema';
/**
 * Defines the query parameters that can be provided in a request to the
 * ListCustomers endpoint.
 */
export interface ListCustomersRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
    /** Specifies customer attributes as the sort key to customer profiles returned from a search. */
    sortField?: string;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    sortOrder?: string;
}
export declare const listCustomersRequestSchema: Schema<ListCustomersRequest>;
