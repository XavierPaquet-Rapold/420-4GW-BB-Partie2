import { Schema } from '../schema';
import { LoyaltyProgramAccrualRule } from './loyaltyProgramAccrualRule';
import { LoyaltyProgramExpirationPolicy } from './loyaltyProgramExpirationPolicy';
import { LoyaltyProgramRewardTier } from './loyaltyProgramRewardTier';
import { LoyaltyProgramTerminology } from './loyaltyProgramTerminology';
export interface LoyaltyProgram {
    /**
     * The Square-assigned ID of the loyalty program. Updates to
     * the loyalty program do not modify the identifier.
     */
    id: string;
    /** Indicates whether the program is currently active. */
    status: string;
    /** The list of rewards for buyers, sorted by ascending points. */
    rewardTiers: LoyaltyProgramRewardTier[];
    /** Describes when the loyalty program expires. */
    expirationPolicy?: LoyaltyProgramExpirationPolicy;
    terminology: LoyaltyProgramTerminology;
    /** The [locations](#type-Location) at which the program is active. */
    locationIds: string[];
    /** The timestamp when the program was created, in RFC 3339 format. */
    createdAt: string;
    /** The timestamp when the reward was last updated, in RFC 3339 format. */
    updatedAt: string;
    /** Defines how buyers can earn loyalty points. */
    accrualRules: LoyaltyProgramAccrualRule[];
}
export declare const loyaltyProgramSchema: Schema<LoyaltyProgram>;
