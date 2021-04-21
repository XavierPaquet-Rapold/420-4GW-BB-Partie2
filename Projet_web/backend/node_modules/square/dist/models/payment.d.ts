import { Schema } from '../schema';
import { Address } from './address';
import { CardPaymentDetails } from './cardPaymentDetails';
import { CashPaymentDetails } from './cashPaymentDetails';
import { ExternalPaymentDetails } from './externalPaymentDetails';
import { Money } from './money';
import { ProcessingFee } from './processingFee';
import { RiskEvaluation } from './riskEvaluation';
/** Represents a payment processed by the Square API. */
export interface Payment {
    /** A unique ID for the payment. */
    id?: string;
    /** The timestamp of when the payment was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp of when the payment was last updated, in RFC 3339 format. */
    updatedAt?: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    amountMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    tipMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    appFeeMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    approvedMoney?: Money;
    /** The processing fees and fee adjustments assessed by Square for this payment. */
    processingFee?: ProcessingFee[];
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    refundedMoney?: Money;
    /** Indicates whether the payment is APPROVED, COMPLETED, CANCELED, or FAILED. */
    status?: string;
    /**
     * The duration of time after the payment's creation when Square automatically applies the
     * `delay_action` to the payment. This automatic `delay_action` applies only to payments that
     * do not reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delay_duration`
     * time period.
     * This field is specified as a time duration, in RFC 3339 format.
     * Notes:
     * This feature is only supported for card payments.
     * Default:
     * - Card-present payments: "PT36H" (36 hours) from the creation time.
     * - Card-not-present payments: "P7D" (7 days) from the creation time.
     */
    delayDuration?: string;
    /**
     * The action to be applied to the payment when the `delay_duration` has elapsed. This field
     * is read-only.
     * Current values include `CANCEL`.
     */
    delayAction?: string;
    /**
     * The read-only timestamp of when the `delay_action` is automatically applied,
     * in RFC 3339 format.
     * Note that this field is calculated by summing the payment's `delay_duration` and `created_at`
     * fields. The `created_at` field is generated by Square and might not exactly match the
     * time on your local machine.
     */
    delayedUntil?: string;
    /**
     * The source type for this payment.
     * Current values include `CARD`, `CASH`, or `EXTERNAL`.
     */
    sourceType?: string;
    /** Reflects the current status of a card payment. Contains only non-confidential information. */
    cardDetails?: CardPaymentDetails;
    /**
     * Stores details about a cash payment. Contains only non-confidential information. For more information, see
     * [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
     */
    cashDetails?: CashPaymentDetails;
    /**
     * Stores details about an external payment. Contains only non-confidential information.
     * For more information, see
     * [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
     */
    externalDetails?: ExternalPaymentDetails;
    /** The ID of the location associated with the payment. */
    locationId?: string;
    /** The ID of the order associated with the payment. */
    orderId?: string;
    /**
     * An optional ID that associates the payment with an entity in
     * another system.
     */
    referenceId?: string;
    /** The [Customer](#type-customer) ID of the customer associated with the payment. */
    customerId?: string;
    /** An optional ID of the employee associated with taking the payment. */
    employeeId?: string;
    /** A list of `refund_id`s identifying refunds for the payment. */
    refundIds?: string[];
    /**
     * Represents fraud risk information for the associated payment.
     * When you take a payment through Square's Payments API (using the `CreatePayment`
     * endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
     * can use this information to determine the course of action (for example,
     * provide the goods/services or refund the payment).
     */
    riskEvaluation?: RiskEvaluation;
    /** The buyer's email address. */
    buyerEmailAddress?: string;
    /** Represents a physical address. */
    billingAddress?: Address;
    /** Represents a physical address. */
    shippingAddress?: Address;
    /** An optional note to include when creating a payment. */
    note?: string;
    /**
     * Additional payment information that gets added to the customer's card statement
     * as part of the statement description.
     * Note that the `statement_description_identifier` might get truncated on the statement description
     * to fit the required information including the Square identifier (SQ *) and the name of the
     * seller taking the payment.
     */
    statementDescriptionIdentifier?: string;
    /**
     * Actions that can be performed on this payment:
     * - `EDIT_AMOUNT_UP` - The payment amount can be edited up.
     * - `EDIT_AMOUNT_DOWN` - The payment amount can be edited down.
     * - `EDIT_TIP_AMOUNT_UP` - The tip amount can be edited up.
     * - `EDIT_TIP_AMOUNT_DOWN` - The tip amount can be edited down.
     */
    capabilities?: string[];
    /**
     * The payment's receipt number.
     * The field is missing if a payment is canceled.
     */
    receiptNumber?: string;
    /**
     * The URL for the payment's receipt.
     * The field is only populated for COMPLETED payments.
     */
    receiptUrl?: string;
    /**
     * Used for optimistic concurrency. This opaque token identifies a specific version of the
     * `Payment` object.
     */
    versionToken?: string;
}
export declare const paymentSchema: Schema<Payment>;
