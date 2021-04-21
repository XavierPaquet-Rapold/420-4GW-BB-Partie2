import { Schema } from '../schema';
/** Represents communication preferences for the customer profile. */
export interface CustomerPreferences {
    /** The customer has unsubscribed from receiving marketing campaign emails. */
    emailUnsubscribed?: boolean;
}
export declare const customerPreferencesSchema: Schema<CustomerPreferences>;
