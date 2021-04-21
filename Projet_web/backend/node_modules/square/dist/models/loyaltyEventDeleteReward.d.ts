import { Schema } from '../schema';
/** Provides metadata when the event `type` is `DELETE_REWARD`. */
export interface LoyaltyEventDeleteReward {
    /** The ID of the [loyalty program](#type-LoyaltyProgram). */
    loyaltyProgramId: string;
    /**
     * The ID of the deleted [loyalty reward](#type-LoyaltyReward).
     * This field is returned only if the event source is `LOYALTY_API`.
     */
    rewardId?: string;
    /** The number of points returned to the loyalty account. */
    points: number;
}
export declare const loyaltyEventDeleteRewardSchema: Schema<LoyaltyEventDeleteReward>;
