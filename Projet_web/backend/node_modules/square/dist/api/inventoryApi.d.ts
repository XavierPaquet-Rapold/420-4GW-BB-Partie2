import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { BatchChangeInventoryRequest } from '../models/batchChangeInventoryRequest';
import { BatchChangeInventoryResponse } from '../models/batchChangeInventoryResponse';
import { BatchRetrieveInventoryChangesRequest } from '../models/batchRetrieveInventoryChangesRequest';
import { BatchRetrieveInventoryChangesResponse } from '../models/batchRetrieveInventoryChangesResponse';
import { BatchRetrieveInventoryCountsRequest } from '../models/batchRetrieveInventoryCountsRequest';
import { BatchRetrieveInventoryCountsResponse } from '../models/batchRetrieveInventoryCountsResponse';
import { RetrieveInventoryAdjustmentResponse } from '../models/retrieveInventoryAdjustmentResponse';
import { RetrieveInventoryChangesResponse } from '../models/retrieveInventoryChangesResponse';
import { RetrieveInventoryCountResponse } from '../models/retrieveInventoryCountResponse';
import { RetrieveInventoryPhysicalCountResponse } from '../models/retrieveInventoryPhysicalCountResponse';
import { BaseApi } from './baseApi';
export declare class InventoryApi extends BaseApi {
    /**
     * Returns the [InventoryAdjustment](#type-inventoryadjustment) object
     * with the provided `adjustment_id`.
     *
     * @param adjustmentId  ID of the [InventoryAdjustment](#type-inventoryadjustment) to retrieve.
     * @return Response from the API call
     */
    retrieveInventoryAdjustment(adjustmentId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveInventoryAdjustmentResponse>>;
    /**
     * Applies adjustments and counts to the provided item quantities.
     *
     * On success: returns the current calculated counts for all objects
     * referenced in the request.
     * On failure: returns a list of related errors.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    batchChangeInventory(body: BatchChangeInventoryRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BatchChangeInventoryResponse>>;
    /**
     * Returns historical physical counts and adjustments based on the
     * provided filter criteria.
     *
     * Results are paginated and sorted in ascending order according their
     * `occurred_at` timestamp (oldest first).
     *
     * BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
     * that cannot be handled by other, simpler endpoints.
     *
     * @param body An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    batchRetrieveInventoryChanges(body: BatchRetrieveInventoryChangesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BatchRetrieveInventoryChangesResponse>>;
    /**
     * Returns current counts for the provided
     * [CatalogObject](#type-catalogobject)s at the requested
     * [Location](#type-location)s.
     *
     * Results are paginated and sorted in descending order according to their
     * `calculated_at` timestamp (newest first).
     *
     * When `updated_after` is specified, only counts that have changed since that
     * time (based on the server timestamp for the most recent change) are
     * returned. This allows clients to perform a "sync" operation, for example
     * in response to receiving a Webhook notification.
     *
     * @param body An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    batchRetrieveInventoryCounts(body: BatchRetrieveInventoryCountsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BatchRetrieveInventoryCountsResponse>>;
    /**
     * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount)
     * object with the provided `physical_count_id`.
     *
     * @param physicalCountId   ID of the [InventoryPhysicalCount](#type-inventoryphysicalcount) to retrieve.
     * @return Response from the API call
     */
    retrieveInventoryPhysicalCount(physicalCountId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveInventoryPhysicalCountResponse>>;
    /**
     * Retrieves the current calculated stock count for a given
     * [CatalogObject](#type-catalogobject) at a given set of
     * [Location](#type-location)s. Responses are paginated and unsorted.
     * For more sophisticated queries, use a batch endpoint.
     *
     * @param catalogObjectId   ID of the [CatalogObject](#type-catalogobject) to retrieve.
     * @param locationIds       The [Location](#type-location) IDs to look up as a comma-separated list. An
     *                                    empty list queries all locations.
     * @param cursor            A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                    to retrieve the next set of results for the original query.  See the
     *                                    [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination)
     *                                    guide for more information.
     * @return Response from the API call
     */
    retrieveInventoryCount(catalogObjectId: string, locationIds?: string, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveInventoryCountResponse>>;
    /**
     * Returns a set of physical counts and inventory adjustments for the
     * provided [CatalogObject](#type-catalogobject) at the requested
     * [Location](#type-location)s.
     *
     * Results are paginated and sorted in descending order according to their
     * `occurred_at` timestamp (newest first).
     *
     * There are no limits on how far back the caller can page. This endpoint can be
     * used to display recent changes for a specific item. For more
     * sophisticated queries, use a batch endpoint.
     *
     * @param catalogObjectId   ID of the [CatalogObject](#type-catalogobject) to retrieve.
     * @param locationIds       The [Location](#type-location) IDs to look up as a comma-separated list. An
     *                                    empty list queries all locations.
     * @param cursor            A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                    to retrieve the next set of results for the original query.  See the
     *                                    [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination)
     *                                    guide for more information.
     * @return Response from the API call
     */
    retrieveInventoryChanges(catalogObjectId: string, locationIds?: string, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveInventoryChangesResponse>>;
}
