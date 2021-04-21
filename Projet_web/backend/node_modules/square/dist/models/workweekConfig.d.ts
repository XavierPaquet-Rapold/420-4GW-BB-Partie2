import { Schema } from '../schema';
/**
 * Sets the Day of the week and hour of the day that a business starts a
 * work week. Used for the calculation of overtime pay.
 */
export interface WorkweekConfig {
    /** UUID for this object */
    id?: string;
    /** The days of the week. */
    startOfWeek: string;
    /**
     * The local time at which a business week cuts over. Represented as a
     * string in `HH:MM` format (`HH:MM:SS` is also accepted, but seconds are
     * truncated).
     */
    startOfDayLocalTime: string;
    /**
     * Used for resolving concurrency issues; request will fail if version
     * provided does not match server version at time of request. If not provided,
     * Square executes a blind write; potentially overwriting data from another
     * write.
     */
    version?: number;
    /** A read-only timestamp in RFC 3339 format; presented in UTC */
    createdAt?: string;
    /** A read-only timestamp in RFC 3339 format; presented in UTC */
    updatedAt?: string;
}
export declare const workweekConfigSchema: Schema<WorkweekConfig>;
