import { Schema } from '../schema';
import { OrderMoneyAmounts } from './orderMoneyAmounts';
import { OrderReturnDiscount } from './orderReturnDiscount';
import { OrderReturnLineItem } from './orderReturnLineItem';
import { OrderReturnServiceCharge } from './orderReturnServiceCharge';
import { OrderReturnTax } from './orderReturnTax';
import { OrderRoundingAdjustment } from './orderRoundingAdjustment';
/** The set of line items, service charges, taxes, discounts, tips, etc. being returned in an Order. */
export interface OrderReturn {
    /** Unique ID that identifies the return only within this order. */
    uid?: string;
    /**
     * Order which contains the original sale of these returned line items. This will be unset
     * for unlinked returns.
     */
    sourceOrderId?: string;
    /** Collection of line items which are being returned. */
    returnLineItems?: OrderReturnLineItem[];
    /** Collection of service charges which are being returned. */
    returnServiceCharges?: OrderReturnServiceCharge[];
    /**
     * Collection of references to taxes being returned for an order, including the total
     * applied tax amount to be returned. The taxes must reference a top-level tax ID from the source
     * order.
     */
    returnTaxes?: OrderReturnTax[];
    /**
     * Collection of references to discounts being returned for an order, including the total
     * applied discount amount to be returned. The discounts must reference a top-level discount ID
     * from the source order.
     */
    returnDiscounts?: OrderReturnDiscount[];
    /**
     * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding
     * when the minimum unit of account is smaller than the lowest physical denomination of currency.
     */
    roundingAdjustment?: OrderRoundingAdjustment;
    /** A collection of various money amounts. */
    returnAmounts?: OrderMoneyAmounts;
}
export declare const orderReturnSchema: Schema<OrderReturn>;
