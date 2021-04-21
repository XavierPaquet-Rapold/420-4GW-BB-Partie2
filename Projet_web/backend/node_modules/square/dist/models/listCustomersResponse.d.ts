import { Schema } from '../schema';
import { Customer } from './customer';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the ListCustomers endpoint.
 * One of `errors` or `customers` is present in a given response (never both).
 */
export interface ListCustomersResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** An array of `Customer` objects that match the provided query. */
    customers?: Customer[];
    /**
     * A pagination cursor to retrieve the next set of results for the
     * original query. Only present if the request succeeded and additional results
     * are available.
     * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
}
export declare const listCustomersResponseSchema: Schema<ListCustomersResponse>;
