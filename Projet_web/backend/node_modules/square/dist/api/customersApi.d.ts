import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { AddGroupToCustomerResponse } from '../models/addGroupToCustomerResponse';
import { CreateCustomerCardRequest } from '../models/createCustomerCardRequest';
import { CreateCustomerCardResponse } from '../models/createCustomerCardResponse';
import { CreateCustomerRequest } from '../models/createCustomerRequest';
import { CreateCustomerResponse } from '../models/createCustomerResponse';
import { DeleteCustomerCardResponse } from '../models/deleteCustomerCardResponse';
import { DeleteCustomerResponse } from '../models/deleteCustomerResponse';
import { ListCustomersResponse } from '../models/listCustomersResponse';
import { RemoveGroupFromCustomerResponse } from '../models/removeGroupFromCustomerResponse';
import { RetrieveCustomerResponse } from '../models/retrieveCustomerResponse';
import { SearchCustomersRequest } from '../models/searchCustomersRequest';
import { SearchCustomersResponse } from '../models/searchCustomersResponse';
import { UpdateCustomerRequest } from '../models/updateCustomerRequest';
import { UpdateCustomerResponse } from '../models/updateCustomerResponse';
import { BaseApi } from './baseApi';
export declare class CustomersApi extends BaseApi {
    /**
     * Lists customer profiles associated with a Square account.
     *
     * Under normal operating conditions, newly created or updated customer profiles become available
     * for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
     * profiles can take closer to one minute or longer, especially during network incidents and outages.
     *
     * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                             retrieve the next set of results for your original query.  See the [Pagination
     *                             guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more
     *                             information.
     * @param sortField  Indicates how Customers should be sorted.  Default: `DEFAULT`.
     * @param sortOrder  Indicates whether Customers should be sorted in ascending (`ASC`) or descending
     *                             (`DESC`) order.  Default: `ASC`.
     * @return Response from the API call
     */
    listCustomers(cursor?: string, sortField?: string, sortOrder?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListCustomersResponse>>;
    /**
     * Creates a new customer for a business, which can have associated cards on file.
     *
     * You must provide __at least one__ of the following values in your request to this
     * endpoint:
     *
     * - `given_name`
     * - `family_name`
     * - `company_name`
     * - `email_address`
     * - `phone_number`
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                             corresponding object definition for field details.
     * @return Response from the API call
     */
    createCustomer(body: CreateCustomerRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCustomerResponse>>;
    /**
     * Searches the customer profiles associated with a Square account using a supported query filter.
     *
     * Calling `SearchCustomers` without any explicit query filter returns all
     * customer profiles ordered alphabetically based on `given_name` and
     * `family_name`.
     *
     * Under normal operating conditions, newly created or updated customer profiles become available
     * for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
     * profiles can take closer to one minute or longer, especially during network incidents and outages.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                              corresponding object definition for field details.
     * @return Response from the API call
     */
    searchCustomers(body: SearchCustomersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchCustomersResponse>>;
    /**
     * Deletes a customer from a business, along with any linked cards on file. When two profiles
     * are merged into a single profile, that profile is assigned a new `customer_id`. You must use the
     * new `customer_id` to delete merged profiles.
     *
     * @param customerId  The ID of the customer to delete.
     * @return Response from the API call
     */
    deleteCustomer(customerId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteCustomerResponse>>;
    /**
     * Returns details for a single customer.
     *
     * @param customerId  The ID of the customer to retrieve.
     * @return Response from the API call
     */
    retrieveCustomer(customerId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCustomerResponse>>;
    /**
     * Updates the details of an existing customer. When two profiles are merged
     * into a single profile, that profile is assigned a new `customer_id`. You must use
     * the new `customer_id` to update merged profiles.
     *
     * You cannot edit a customer's cards on file with this endpoint. To make changes
     * to a card on file, you must delete the existing card on file with the
     * [DeleteCustomerCard](#endpoint-Customers-deletecustomercard) endpoint, then create a new one with
     * the
     * [CreateCustomerCard](#endpoint-Customers-createcustomercard) endpoint.
     *
     * @param customerId  The ID of the customer to update.
     * @param body        An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateCustomer(customerId: string, body: UpdateCustomerRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateCustomerResponse>>;
    /**
     * Adds a card on file to an existing customer.
     *
     * As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
     * calls with the same card nonce return the same card record that was created
     * with the provided nonce during the _first_ call.
     *
     * @param customerId  The Square ID of the customer profile the card is linked
     *                                                        to.
     * @param body        An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    createCustomerCard(customerId: string, body: CreateCustomerCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCustomerCardResponse>>;
    /**
     * Removes a card on file from a customer.
     *
     * @param customerId  The ID of the customer that the card on file belongs to.
     * @param cardId      The ID of the card on file to delete.
     * @return Response from the API call
     */
    deleteCustomerCard(customerId: string, cardId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteCustomerCardResponse>>;
    /**
     * Removes a group membership from a customer.
     *
     * The customer is identified by the `customer_id` value
     * and the customer group is identified by the `group_id` value.
     *
     * @param customerId  The ID of the customer to remove from the group.
     * @param groupId     The ID of the customer group to remove the customer from.
     * @return Response from the API call
     */
    removeGroupFromCustomer(customerId: string, groupId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RemoveGroupFromCustomerResponse>>;
    /**
     * Adds a group membership to a customer.
     *
     * The customer is identified by the `customer_id` value
     * and the customer group is identified by the `group_id` value.
     *
     * @param customerId  The ID of the customer to add to a group.
     * @param groupId     The ID of the customer group to add the customer to.
     * @return Response from the API call
     */
    addGroupToCustomer(customerId: string, groupId: string, requestOptions?: RequestOptions): Promise<ApiResponse<AddGroupToCustomerResponse>>;
}
