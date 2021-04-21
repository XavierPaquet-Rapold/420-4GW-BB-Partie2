import { Schema } from '../schema';
import { Error } from './error';
export interface RetrieveObsMigrationProfileResponse {
    /** Indicates whether the seller has enabled the COVID banner (`true`) or not (`false`). */
    bannerEnabled?: boolean;
    /** The text appearing on the COVID banner. */
    bannerText?: string;
    /** The text of the label of the CTA button beneath the banner. */
    bannerCtaText?: string;
    /** The URL to link to when the CTA button is clicked. */
    bannerCtaUrl?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveObsMigrationProfileResponseSchema: Schema<RetrieveObsMigrationProfileResponse>;
