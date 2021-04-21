import { Schema } from '../schema';
import { Location } from './location';
/** Request object for the [UpdateLocation](#endpoint-updatelocation) endpoint. */
export interface UpdateLocationRequest {
    location?: Location;
}
export declare const updateLocationRequestSchema: Schema<UpdateLocationRequest>;
