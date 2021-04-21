import { Schema } from '../schema';
import { Error } from './error';
import { Location } from './location';
/**
 * Defines the fields that the
 * [RetrieveLocation](#endpoint-retrievelocation) endpoint returns
 * in a response.
 */
export interface RetrieveLocationResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    location?: Location;
}
export declare const retrieveLocationResponseSchema: Schema<RetrieveLocationResponse>;
