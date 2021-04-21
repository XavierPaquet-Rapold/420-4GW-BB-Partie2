import { Schema } from '../schema';
import { WorkweekConfig } from './workweekConfig';
/** A request to update a `WorkweekConfig` object */
export interface UpdateWorkweekConfigRequest {
    /**
     * Sets the Day of the week and hour of the day that a business starts a
     * work week. Used for the calculation of overtime pay.
     */
    workweekConfig: WorkweekConfig;
}
export declare const updateWorkweekConfigRequestSchema: Schema<UpdateWorkweekConfigRequest>;
