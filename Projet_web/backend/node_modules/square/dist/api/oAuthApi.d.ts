import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { ObtainTokenRequest } from '../models/obtainTokenRequest';
import { ObtainTokenResponse } from '../models/obtainTokenResponse';
import { RenewTokenRequest } from '../models/renewTokenRequest';
import { RenewTokenResponse } from '../models/renewTokenResponse';
import { RevokeTokenRequest } from '../models/revokeTokenRequest';
import { RevokeTokenResponse } from '../models/revokeTokenResponse';
import { BaseApi } from './baseApi';
export declare class OAuthApi extends BaseApi {
    /**
     * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see
     * [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).
     *
     *
     * Renews an OAuth access token before it expires.
     *
     * OAuth access tokens besides your application's personal access token expire after __30 days__.
     * You can also renew expired tokens within __15 days__ of their expiration.
     * You cannot renew an access token that has been expired for more than 15 days.
     * Instead, the associated user must re-complete the OAuth flow from the beginning.
     *
     * __Important:__ The `Authorization` header for this endpoint must have the
     * following format:
     *
     * ```
     * Authorization: Client APPLICATION_SECRET
     * ```
     *
     * Replace `APPLICATION_SECRET` with the application secret on the Credentials
     * page in the [application dashboard](https://connect.squareup.com/apps).
     *
     * @param clientId      Your application ID, available from the [application
     *                                                  dashboard](https://connect.squareup.com/apps).
     * @param body          An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @param authorization Client APPLICATION_SECRET
     * @return Response from the API call
     * @deprecated
     */
    renewToken(clientId: string, body: RenewTokenRequest, authorization: string, requestOptions?: RequestOptions): Promise<ApiResponse<RenewTokenResponse>>;
    /**
     * Revokes an access token generated with the OAuth flow.
     *
     * If an account has more than one OAuth access token for your application, this
     * endpoint revokes all of them, regardless of which token you specify. When an
     * OAuth access token is revoked, all of the active subscriptions associated
     * with that OAuth token are canceled immediately.
     *
     * __Important:__ The `Authorization` header for this endpoint must have the
     * following format:
     *
     * ```
     * Authorization: Client APPLICATION_SECRET
     * ```
     *
     * Replace `APPLICATION_SECRET` with the application secret on the Credentials
     * page in the [Developer Dashboard](https://developer.squareup.com/apps).
     *
     * @param body          An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @param authorization Client APPLICATION_SECRET
     * @return Response from the API call
     */
    revokeToken(body: RevokeTokenRequest, authorization: string, requestOptions?: RequestOptions): Promise<ApiResponse<RevokeTokenResponse>>;
    /**
     * Returns an OAuth access token.
     *
     * The endpoint supports distinct methods of obtaining OAuth access tokens.
     * Applications specify a method by adding the `grant_type` parameter
     * in the request and also provide relevant information.
     *
     * __Note:__ Regardless of the method application specified,
     * the endpoint always returns two items; an OAuth access token and
     * a refresh token in the response.
     *
     * __OAuth tokens should only live on secure servers. Application clients
     * should never interact directly with OAuth tokens__.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                          corresponding object definition for field details.
     * @return Response from the API call
     */
    obtainToken(body: ObtainTokenRequest, requestOptions?: RequestOptions): Promise<ApiResponse<ObtainTokenResponse>>;
}
