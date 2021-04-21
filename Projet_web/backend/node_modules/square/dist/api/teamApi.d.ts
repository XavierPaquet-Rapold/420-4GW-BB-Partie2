import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { BulkCreateTeamMembersRequest } from '../models/bulkCreateTeamMembersRequest';
import { BulkCreateTeamMembersResponse } from '../models/bulkCreateTeamMembersResponse';
import { BulkUpdateTeamMembersRequest } from '../models/bulkUpdateTeamMembersRequest';
import { BulkUpdateTeamMembersResponse } from '../models/bulkUpdateTeamMembersResponse';
import { CreateTeamMemberRequest } from '../models/createTeamMemberRequest';
import { CreateTeamMemberResponse } from '../models/createTeamMemberResponse';
import { RetrieveTeamMemberResponse } from '../models/retrieveTeamMemberResponse';
import { RetrieveWageSettingResponse } from '../models/retrieveWageSettingResponse';
import { SearchTeamMembersRequest } from '../models/searchTeamMembersRequest';
import { SearchTeamMembersResponse } from '../models/searchTeamMembersResponse';
import { UpdateTeamMemberRequest } from '../models/updateTeamMemberRequest';
import { UpdateTeamMemberResponse } from '../models/updateTeamMemberResponse';
import { UpdateWageSettingRequest } from '../models/updateWageSettingRequest';
import { UpdateWageSettingResponse } from '../models/updateWageSettingResponse';
import { BaseApi } from './baseApi';
export declare class TeamApi extends BaseApi {
    /**
     * Creates a single `TeamMember` object. The `TeamMember` will be returned on successful creates.
     * You must provide the following values in your request to this endpoint:
     * - `given_name`
     * - `family_name`
     *
     * Learn about [Troubleshooting the Teams API](https://developer.squareup.
     * com/docs/team/troubleshooting#createteammember).
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                               corresponding object definition for field details.
     * @return Response from the API call
     */
    createTeamMember(body: CreateTeamMemberRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateTeamMemberResponse>>;
    /**
     * Creates multiple `TeamMember` objects. The created `TeamMember` objects will be returned on
     * successful creates.
     * This process is non-transactional and will process as much of the request as is possible. If one of
     * the creates in
     * the request cannot be successfully processed, the request will NOT be marked as failed, but the body
     * of the response
     * will contain explicit error information for this particular create.
     *
     * Learn about [Troubleshooting the Teams API](https://developer.squareup.
     * com/docs/team/troubleshooting#bulkcreateteammembers).
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    bulkCreateTeamMembers(body: BulkCreateTeamMembersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkCreateTeamMembersResponse>>;
    /**
     * Updates multiple `TeamMember` objects. The updated `TeamMember` objects will be returned on
     * successful updates.
     * This process is non-transactional and will process as much of the request as is possible. If one of
     * the updates in
     * the request cannot be successfully processed, the request will NOT be marked as failed, but the body
     * of the response
     * will contain explicit error information for this particular update.
     * Learn about [Troubleshooting the Teams API](https://developer.squareup.
     * com/docs/team/troubleshooting#bulkupdateteammembers).
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    bulkUpdateTeamMembers(body: BulkUpdateTeamMembersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpdateTeamMembersResponse>>;
    /**
     * Returns a paginated list of `TeamMember` objects for a business.
     * The list to be returned can be filtered by:
     * - location IDs **and**
     * - `status`
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                                corresponding object definition for field details.
     * @return Response from the API call
     */
    searchTeamMembers(body: SearchTeamMembersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchTeamMembersResponse>>;
    /**
     * Retrieve a `TeamMember` object for the given `TeamMember.id`.
     * Learn about [Troubleshooting the Teams API](https://developer.squareup.
     * com/docs/team/troubleshooting#retrieveteammember).
     *
     * @param teamMemberId   The ID of the team member to retrieve.
     * @return Response from the API call
     */
    retrieveTeamMember(teamMemberId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveTeamMemberResponse>>;
    /**
     * Updates a single `TeamMember` object. The `TeamMember` will be returned on successful updates.
     * Learn about [Troubleshooting the Teams API](https://developer.squareup.
     * com/docs/team/troubleshooting#updateteammember).
     *
     * @param teamMemberId   The ID of the team member to update.
     * @param body           An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateTeamMember(teamMemberId: string, body: UpdateTeamMemberRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateTeamMemberResponse>>;
    /**
     * Retrieve a `WageSetting` object for a team member specified
     * by `TeamMember.id`.
     * Learn about [Troubleshooting the Teams API](https://developer.squareup.
     * com/docs/team/troubleshooting#retrievewagesetting).
     *
     * @param teamMemberId   The ID of the team member to retrieve wage setting for
     * @return Response from the API call
     */
    retrieveWageSetting(teamMemberId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveWageSettingResponse>>;
    /**
     * Creates or updates a `WageSetting` object. The object is created if a
     * `WageSetting` with the specified `team_member_id` does not exist. Otherwise,
     * it fully replaces the `WageSetting` object for the team member.
     * The `WageSetting` will be returned upon successful update.
     * Learn about [Troubleshooting the Teams API](https://developer.squareup.
     * com/docs/team/troubleshooting#updatewagesetting).
     *
     * @param teamMemberId   The ID of the team member to update the `WageSetting`
     *                                                          object for.
     * @param body           An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    updateWageSetting(teamMemberId: string, body: UpdateWageSettingRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateWageSettingResponse>>;
}
