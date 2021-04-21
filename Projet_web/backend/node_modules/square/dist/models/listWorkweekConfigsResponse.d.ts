import { Schema } from '../schema';
import { Error } from './error';
import { WorkweekConfig } from './workweekConfig';
/**
 * The response to a request for a set of `WorkweekConfig` objects. Contains
 * the requested `WorkweekConfig` objects. May contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface ListWorkweekConfigsResponse {
    /** A page of Employee Wage results. */
    workweekConfigs?: WorkweekConfig[];
    /**
     * Value supplied in the subsequent request to fetch the next page of
     * Employee Wage results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listWorkweekConfigsResponseSchema: Schema<ListWorkweekConfigsResponse>;
