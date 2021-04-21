import { Schema } from '../schema';
export interface V1ListEmployeeRolesRequest {
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    order?: string;
    /** The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your
     * original query to the endpoint.
     */
    batchToken?: string;
}
export declare const v1ListEmployeeRolesRequestSchema: Schema<V1ListEmployeeRolesRequest>;
