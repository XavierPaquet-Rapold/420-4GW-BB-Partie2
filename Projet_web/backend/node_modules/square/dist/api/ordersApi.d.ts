import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { BatchRetrieveOrdersRequest } from '../models/batchRetrieveOrdersRequest';
import { BatchRetrieveOrdersResponse } from '../models/batchRetrieveOrdersResponse';
import { CalculateOrderRequest } from '../models/calculateOrderRequest';
import { CalculateOrderResponse } from '../models/calculateOrderResponse';
import { CreateOrderRequest } from '../models/createOrderRequest';
import { CreateOrderResponse } from '../models/createOrderResponse';
import { PayOrderRequest } from '../models/payOrderRequest';
import { PayOrderResponse } from '../models/payOrderResponse';
import { RetrieveOrderResponse } from '../models/retrieveOrderResponse';
import { SearchOrdersRequest } from '../models/searchOrdersRequest';
import { SearchOrdersResponse } from '../models/searchOrdersResponse';
import { UpdateOrderRequest } from '../models/updateOrderRequest';
import { UpdateOrderResponse } from '../models/updateOrderResponse';
import { BaseApi } from './baseApi';
export declare class OrdersApi extends BaseApi {
    /**
     * Creates a new [Order](#type-order) which can include information on products for
     * purchase and settings to apply to the purchase.
     *
     * To pay for a created order, please refer to the [Pay for Orders](https://developer.squareup.
     * com/docs/orders-api/pay-for-orders)
     * guide.
     *
     * You can modify open orders using the [UpdateOrder](#endpoint-orders-updateorder) endpoint.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                          corresponding object definition for field details.
     * @return Response from the API call
     */
    createOrder(body: CreateOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateOrderResponse>>;
    /**
     * Retrieves a set of [Order](#type-order)s by their IDs.
     *
     * If a given Order ID does not exist, the ID is ignored instead of generating an error.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    batchRetrieveOrders(body: BatchRetrieveOrdersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BatchRetrieveOrdersResponse>>;
    /**
     * Calculates an [Order](#type-order).
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                             corresponding object definition for field details.
     * @return Response from the API call
     */
    calculateOrder(body: CalculateOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CalculateOrderResponse>>;
    /**
     * Search all orders for one or more locations. Orders include all sales,
     * returns, and exchanges regardless of how or when they entered the Square
     * Ecosystem (e.g. Point of Sale, Invoices, Connect APIs, etc).
     *
     * SearchOrders requests need to specify which locations to search and define a
     * [`SearchOrdersQuery`](#type-searchordersquery) object which controls
     * how to sort or filter the results. Your SearchOrdersQuery can:
     *
     * Set filter criteria.
     * Set sort order.
     * Determine whether to return results as complete Order objects, or as
     * [OrderEntry](#type-orderentry) objects.
     *
     * Note that details for orders processed with Square Point of Sale while in
     * offline mode may not be transmitted to Square for up to 72 hours. Offline
     * orders have a `created_at` value that reflects the time the order was created,
     * not the time it was subsequently transmitted to Square.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                           corresponding object definition for field details.
     * @return Response from the API call
     */
    searchOrders(body: SearchOrdersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchOrdersResponse>>;
    /**
     * Retrieves an [Order](#type-order) by ID.
     *
     * @param orderId  The ID of the order to retrieve.
     * @return Response from the API call
     */
    retrieveOrder(orderId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveOrderResponse>>;
    /**
     * Updates an open [Order](#type-order) by adding, replacing, or deleting
     * fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.
     *
     * An UpdateOrder request requires the following:
     *
     * - The `order_id` in the endpoint path, identifying the order to update.
     * - The latest `version` of the order to update.
     * - The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-
     * objects)
     * containing only the fields to update and the version the update is
     * being applied to.
     * - If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-
     * orders#on-dot-notation)
     * identifying fields to clear.
     *
     * To pay for an order, please refer to the [Pay for Orders](https://developer.squareup.com/docs/orders-
     * api/pay-for-orders) guide.
     *
     * @param orderId  The ID of the order to update.
     * @param body     An object containing the fields to POST for the request.  See the
     *                                              corresponding object definition for field details.
     * @return Response from the API call
     */
    updateOrder(orderId: string, body: UpdateOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateOrderResponse>>;
    /**
     * Pay for an [order](#type-order) using one or more approved [payments](#type-payment),
     * or settle an order with a total of `0`.
     *
     * The total of the `payment_ids` listed in the request must be equal to the order
     * total. Orders with a total amount of `0` can be marked as paid by specifying an empty
     * array of `payment_ids` in the request.
     *
     * To be used with PayOrder, a payment must:
     *
     * - Reference the order by specifying the `order_id` when [creating the payment](#endpoint-payments-
     * createpayment).
     * Any approved payments that reference the same `order_id` not specified in the
     * `payment_ids` will be canceled.
     * - Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-
     * payments#delayed-capture).
     * Using a delayed capture payment with PayOrder will complete the approved payment.
     *
     * @param orderId  The ID of the order being paid.
     * @param body     An object containing the fields to POST for the request.  See the
     *                                           corresponding object definition for field details.
     * @return Response from the API call
     */
    payOrder(orderId: string, body: PayOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<PayOrderResponse>>;
}
