import { Schema } from '../schema';
import { Error } from './error';
import { Location } from './location';
/** Response object returned by the [CreateLocation](#endpoint-createlocation) endpoint. */
export interface CreateLocationResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    location?: Location;
}
export declare const createLocationResponseSchema: Schema<CreateLocationResponse>;
