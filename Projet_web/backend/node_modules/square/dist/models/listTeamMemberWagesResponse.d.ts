import { Schema } from '../schema';
import { Error } from './error';
import { TeamMemberWage } from './teamMemberWage';
/**
 * The response to a request for a set of `TeamMemberWage` objects. Contains
 * a set of `TeamMemberWage`.
 */
export interface ListTeamMemberWagesResponse {
    /** A page of Team Member Wage results. */
    teamMemberWages?: TeamMemberWage[];
    /**
     * Value supplied in the subsequent request to fetch the next next page
     * of Team Member Wage results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listTeamMemberWagesResponseSchema: Schema<ListTeamMemberWagesResponse>;
