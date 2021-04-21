import { Schema } from '../schema';
export interface LoyaltyReward {
    /** The Square-assigned ID of the loyalty reward. */
    id?: string;
    /** The status of the loyalty reward. */
    status?: string;
    /** The Square-assigned ID of the [loyalty account](#type-LoyaltyAccount) to which the reward belongs. */
    loyaltyAccountId: string;
    /** The Square-assigned ID of the [reward tier](#type-LoyaltyProgramRewardTier) used to create the reward. */
    rewardTierId: string;
    /** The number of loyalty points used for the reward. */
    points?: number;
    /** The Square-assigned ID of the [order](#type-Order) to which the reward is attached. */
    orderId?: string;
    /** The timestamp when the reward was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the reward was last updated, in RFC 3339 format. */
    updatedAt?: string;
    /** The timestamp when the reward was redeemed, in RFC 3339 format. */
    redeemedAt?: string;
}
export declare const loyaltyRewardSchema: Schema<LoyaltyReward>;
