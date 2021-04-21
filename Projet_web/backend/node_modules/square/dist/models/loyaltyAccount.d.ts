import { Schema } from '../schema';
import { LoyaltyAccountMapping } from './loyaltyAccountMapping';
/**
 * Describes a loyalty account. For more information, see
 * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
export interface LoyaltyAccount {
    /** The Square-assigned ID of the loyalty account. */
    id?: string;
    /**
     * The list of mappings that the account is associated with.
     * Currently, a buyer can only be mapped to a loyalty account using
     * a phone number. Therefore, the list can only have one mapping.
     */
    mappings: LoyaltyAccountMapping[];
    /** The Square-assigned ID of the [loyalty program](#type-LoyaltyProgram) to which the account belongs. */
    programId: string;
    /**
     * The available point balance in the loyalty account.
     * Your application should be able to handle loyalty accounts that have a negative point balance (`balance` is less than 0). This might occur if a seller makes a manual adjustment or as a result of a refund or exchange.
     */
    balance?: number;
    /** The total points accrued during the lifetime of the account. */
    lifetimePoints?: number;
    /** The Square-assigned ID of the [customer](#type-Customer) that is associated with the account. */
    customerId?: string;
    /** The timestamp when enrollment occurred, in RFC 3339 format. */
    enrolledAt?: string;
    /** The timestamp when the loyalty account was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the loyalty account was last updated, in RFC 3339 format. */
    updatedAt?: string;
}
export declare const loyaltyAccountSchema: Schema<LoyaltyAccount>;
