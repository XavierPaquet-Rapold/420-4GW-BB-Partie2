import { Schema } from '../schema';
/** Contains some brief information about a Customer Group with its identifier included. */
export interface CustomerGroupInfo {
    /** The ID of the Customer Group. */
    id: string;
    /** The name of the Customer Group. */
    name: string;
}
export declare const customerGroupInfoSchema: Schema<CustomerGroupInfo>;
