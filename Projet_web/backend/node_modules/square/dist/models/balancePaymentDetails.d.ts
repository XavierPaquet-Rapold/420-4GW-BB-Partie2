import { Schema } from '../schema';
/** Reflects the current status of a balance payment. Contains only non-confidential information. */
export interface BalancePaymentDetails {
    /** The ID of the account used to fund the payment. */
    accountId?: string;
    /** The balance payment’s current state. The state can be COMPLETED or FAILED. */
    status?: string;
}
export declare const balancePaymentDetailsSchema: Schema<BalancePaymentDetails>;
