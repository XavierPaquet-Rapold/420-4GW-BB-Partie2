import { Schema } from '../schema';
/** Describes when the loyalty program expires. */
export interface LoyaltyProgramExpirationPolicy {
    /** The duration of time before points expire, in RFC 3339 format. */
    expirationDuration: string;
}
export declare const loyaltyProgramExpirationPolicySchema: Schema<LoyaltyProgramExpirationPolicy>;
