import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyReward } from './loyaltyReward';
/** A response that includes the loyalty reward. */
export interface RetrieveLoyaltyRewardResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    reward?: LoyaltyReward;
}
export declare const retrieveLoyaltyRewardResponseSchema: Schema<RetrieveLoyaltyRewardResponse>;
