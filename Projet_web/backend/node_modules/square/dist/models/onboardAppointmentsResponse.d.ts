import { Schema } from '../schema';
import { Error } from './error';
export interface OnboardAppointmentsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const onboardAppointmentsResponseSchema: Schema<OnboardAppointmentsResponse>;
