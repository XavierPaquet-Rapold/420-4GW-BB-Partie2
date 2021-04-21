import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { ListCustomerSegmentsResponse } from '../models/listCustomerSegmentsResponse';
import { RetrieveCustomerSegmentResponse } from '../models/retrieveCustomerSegmentResponse';
import { BaseApi } from './baseApi';
export declare class CustomerSegmentsApi extends BaseApi {
    /**
     * Retrieves the list of customer segments of a business.
     *
     * @param cursor A pagination cursor returned by previous calls to __ListCustomerSegments__. Used to
     *                         retrieve the next set of query results.  See the [Pagination guide](https://developer.
     *                         squareup.com/docs/working-with-apis/pagination) for more information.
     * @return Response from the API call
     */
    listCustomerSegments(cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListCustomerSegmentsResponse>>;
    /**
     * Retrieves a specific customer segment as identified by the `segment_id` value.
     *
     * @param segmentId  The Square-issued ID of the customer segment.
     * @return Response from the API call
     */
    retrieveCustomerSegment(segmentId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCustomerSegmentResponse>>;
}
