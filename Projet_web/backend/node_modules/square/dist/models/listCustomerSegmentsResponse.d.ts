import { Schema } from '../schema';
import { CustomerSegment } from './customerSegment';
import { Error } from './error';
/**
 * Defines the fields included in the response body for requests to __ListCustomerSegments__.
 * One of `errors` or `segments` is present in a given response (never both).
 */
export interface ListCustomerSegmentsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The list of customer segments belonging to the associated Square account. */
    segments?: CustomerSegment[];
    /**
     * A pagination cursor to be used in subsequent calls to __ListCustomerSegments__
     * to retrieve the next set of query results. Only present only if the request succeeded and
     * additional results are available.
     * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
}
export declare const listCustomerSegmentsResponseSchema: Schema<ListCustomerSegmentsResponse>;
