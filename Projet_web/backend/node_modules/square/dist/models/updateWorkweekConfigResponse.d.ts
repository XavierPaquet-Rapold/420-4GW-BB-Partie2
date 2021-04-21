import { Schema } from '../schema';
import { Error } from './error';
import { WorkweekConfig } from './workweekConfig';
/**
 * The response to a request to update a `WorkweekConfig` object. Contains
 * the updated `WorkweekConfig` object. May contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface UpdateWorkweekConfigResponse {
    /**
     * Sets the Day of the week and hour of the day that a business starts a
     * work week. Used for the calculation of overtime pay.
     */
    workweekConfig?: WorkweekConfig;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const updateWorkweekConfigResponseSchema: Schema<UpdateWorkweekConfigResponse>;
