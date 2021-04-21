import { Schema } from '../schema';
import { Subscription } from './subscription';
/**
 * Defines parameters in a
 * [UpdateSubscription](#endpoint-subscriptions-updatesubscription) endpoint
 * request.
 */
export interface UpdateSubscriptionRequest {
    /**
     * Represents a customer subscription to a subscription plan.
     * For an overview of the `Subscription` type, see
     * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
     */
    subscription?: Subscription;
}
export declare const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest>;
