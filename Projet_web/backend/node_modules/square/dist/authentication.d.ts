import { passThroughInterceptor } from './http/httpInterceptor';
import { AuthenticatorInterface } from './http/requestBuilder';
/** None authentication provider */
export declare const noneAuthenticationProvider: () => typeof passThroughInterceptor;
export declare const accessTokenAuthenticationProvider: ({ accessToken, }: {
    accessToken: string;
}) => AuthenticatorInterface<boolean>;
