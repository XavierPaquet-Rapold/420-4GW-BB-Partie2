import { Schema } from '../schema';
import { Error } from './error';
export interface CheckAppointmentsOnboardedResponse {
    /** Indicates whether the seller has enabled the Square Appointments service (`true`) or not (`false`). */
    appointmentsOnboarded?: boolean;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const checkAppointmentsOnboardedResponseSchema: Schema<CheckAppointmentsOnboardedResponse>;
