import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { CreateCustomerGroupRequest } from '../models/createCustomerGroupRequest';
import { CreateCustomerGroupResponse } from '../models/createCustomerGroupResponse';
import { DeleteCustomerGroupResponse } from '../models/deleteCustomerGroupResponse';
import { ListCustomerGroupsResponse } from '../models/listCustomerGroupsResponse';
import { RetrieveCustomerGroupResponse } from '../models/retrieveCustomerGroupResponse';
import { UpdateCustomerGroupRequest } from '../models/updateCustomerGroupRequest';
import { UpdateCustomerGroupResponse } from '../models/updateCustomerGroupResponse';
import { BaseApi } from './baseApi';
export declare class CustomerGroupsApi extends BaseApi {
    /**
     * Retrieves the list of customer groups of a business.
     *
     * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                         retrieve the next set of results for your original query.  See the [Pagination
     *                         guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more
     *                         information.
     * @return Response from the API call
     */
    listCustomerGroups(cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListCustomerGroupsResponse>>;
    /**
     * Creates a new customer group for a business.
     *
     * The request must include the `name` value of the group.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    createCustomerGroup(body: CreateCustomerGroupRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCustomerGroupResponse>>;
    /**
     * Deletes a customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to delete.
     * @return Response from the API call
     */
    deleteCustomerGroup(groupId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteCustomerGroupResponse>>;
    /**
     * Retrieves a specific customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to retrieve.
     * @return Response from the API call
     */
    retrieveCustomerGroup(groupId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCustomerGroupResponse>>;
    /**
     * Updates a customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to update.
     * @param body     An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateCustomerGroup(groupId: string, body: UpdateCustomerGroupRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateCustomerGroupResponse>>;
}
