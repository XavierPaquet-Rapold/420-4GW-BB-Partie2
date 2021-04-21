import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyAccount } from './loyaltyAccount';
/** A response that includes loyalty account created. */
export interface CreateLoyaltyAccountResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Describes a loyalty account. For more information, see
     * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
     */
    loyaltyAccount?: LoyaltyAccount;
}
export declare const createLoyaltyAccountResponseSchema: Schema<CreateLoyaltyAccountResponse>;
