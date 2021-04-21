import { Schema } from '../schema';
/**
 * A defined break template that sets an expectation for possible `Break`
 * instances on a `Shift`.
 */
export interface BreakType {
    /** UUID for this object. */
    id?: string;
    /** The ID of the business location this type of break applies to. */
    locationId: string;
    /**
     * A human-readable name for this type of break. Will be displayed to
     * employees in Square products.
     */
    breakName: string;
    /**
     * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of
     * this break. Precision below minutes is truncated.
     */
    expectedDuration: string;
    /**
     * Whether this break counts towards time worked for compensation
     * purposes.
     */
    isPaid: boolean;
    /**
     * Used for resolving concurrency issues; request will fail if version
     * provided does not match server version at time of request. If a value is not
     * provided, Square's servers execute a "blind" write; potentially
     * overwriting another writer's data.
     */
    version?: number;
    /** A read-only timestamp in RFC 3339 format. */
    createdAt?: string;
    /** A read-only timestamp in RFC 3339 format. */
    updatedAt?: string;
}
export declare const breakTypeSchema: Schema<BreakType>;
