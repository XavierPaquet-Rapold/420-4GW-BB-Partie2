import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the response returned by
 * [CancelPaymentByIdempotencyKey](#endpoint-payments-cancelpaymentbyidempotencykey).
 * On success, `errors` is empty.
 */
export interface CancelPaymentByIdempotencyKeyResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const cancelPaymentByIdempotencyKeyResponseSchema: Schema<CancelPaymentByIdempotencyKeyResponse>;
