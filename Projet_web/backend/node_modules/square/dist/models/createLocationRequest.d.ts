import { Schema } from '../schema';
import { Location } from './location';
/** Request object for the [CreateLocation](#endpoint-createlocation) endpoint. */
export interface CreateLocationRequest {
    location?: Location;
}
export declare const createLocationRequestSchema: Schema<CreateLocationRequest>;
