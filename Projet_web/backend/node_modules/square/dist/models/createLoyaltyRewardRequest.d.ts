import { Schema } from '../schema';
import { LoyaltyReward } from './loyaltyReward';
/** A request to create a loyalty reward. */
export interface CreateLoyaltyRewardRequest {
    reward: LoyaltyReward;
    /**
     * A unique string that identifies this `CreateLoyaltyReward` request.
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
}
export declare const createLoyaltyRewardRequestSchema: Schema<CreateLoyaltyRewardRequest>;
