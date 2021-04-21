import { Schema } from '../schema';
import { Address } from './address';
/** Provides customer data that Square uses to deliver an invoice. */
export interface InvoiceRecipient {
    /**
     * The ID of the customer. This is the customer profile ID that
     * you provide when creating a draft invoice.
     */
    customerId?: string;
    /** The recipient's given (that is, first) name. */
    givenName?: string;
    /** The recipient's family (that is, last) name. */
    familyName?: string;
    /** The recipient's email address. */
    emailAddress?: string;
    /** Represents a physical address. */
    address?: Address;
    /** The recipient's phone number. */
    phoneNumber?: string;
    /** The name of the recipient's company. */
    companyName?: string;
}
export declare const invoiceRecipientSchema: Schema<InvoiceRecipient>;
