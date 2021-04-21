import { Schema } from '../schema';
/** Describes changes to subscription and billing states. */
export interface SubscriptionEvent {
    /** The ID of the subscription event. */
    id: string;
    /** The possible subscription event types. */
    subscriptionEventType: string;
    /**
     * The date, in YYYY-MM-DD format (for
     * example, 2013-01-15), when the subscription event went into effect.
     */
    effectiveDate: string;
    /** The ID of the subscription plan associated with the subscription. */
    planId: string;
}
export declare const subscriptionEventSchema: Schema<SubscriptionEvent>;
