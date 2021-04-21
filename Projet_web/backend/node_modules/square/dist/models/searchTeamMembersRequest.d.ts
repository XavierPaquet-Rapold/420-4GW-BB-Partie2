import { Schema } from '../schema';
import { SearchTeamMembersQuery } from './searchTeamMembersQuery';
/** Represents a search request for a filtered list of `TeamMember` objects. */
export interface SearchTeamMembersRequest {
    /** Represents the parameters in a search for `TeamMember` objects. */
    query?: SearchTeamMembersQuery;
    /** The maximum number of `TeamMember` objects in a page (25 by default). */
    limit?: number;
    /**
     * The opaque cursor for fetching the next page. Read about
     * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination) with Square APIs for more information.
     */
    cursor?: string;
}
export declare const searchTeamMembersRequestSchema: Schema<SearchTeamMembersRequest>;
