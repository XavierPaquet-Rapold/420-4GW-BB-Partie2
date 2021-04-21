import { Schema } from '../schema';
import { TeamMember } from './teamMember';
/** Represents a create request for a `TeamMember` object. */
export interface CreateTeamMemberRequest {
    /**
     * A unique string that identifies this CreateTeamMember request.
     * Keys can be any valid string but must be unique for every request.
     * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     * <br>
     * <b>Min Length 1    Max Length 45</b>
     */
    idempotencyKey?: string;
    /** A record representing an individual team member for a business. */
    teamMember?: TeamMember;
}
export declare const createTeamMemberRequestSchema: Schema<CreateTeamMemberRequest>;
