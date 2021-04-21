import { Schema } from '../schema';
import { JobAssignment } from './jobAssignment';
/** An object representing a team member's wage information. */
export interface WageSetting {
    /** The unique ID of the `TeamMember` whom this wage setting describes. */
    teamMemberId?: string;
    /**
     * <b>Required</b> The ordered list of jobs that the team member is assigned to.
     * The first job assignment is considered the team member's "Primary Job".
     * <br>
     * <b>Min Length 1    Max Length 12</b>
     */
    jobAssignments?: JobAssignment[];
    /** Whether the team member is exempt from the overtime rules of the seller country. */
    isOvertimeExempt?: boolean;
    /**
     * Used for resolving concurrency issues; request will fail if version
     * provided does not match server version at time of request. If not provided,
     * Square executes a blind write, potentially overwriting data from another write. Read
     * about [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency)
     * in Square APIs for more information.
     */
    version?: number;
    /**
     * The timestamp in RFC 3339 format describing when the wage setting object was created.
     * Ex: "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z"
     */
    createdAt?: string;
    /**
     * The timestamp in RFC 3339 format describing when the wage setting object was last updated.
     * Ex: "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z"
     */
    updatedAt?: string;
}
export declare const wageSettingSchema: Schema<WageSetting>;
