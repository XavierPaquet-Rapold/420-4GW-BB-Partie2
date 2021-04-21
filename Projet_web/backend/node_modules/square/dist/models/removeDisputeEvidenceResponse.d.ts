import { Schema } from '../schema';
import { Error } from './error';
/** Defines the fields in a `RemoveDisputeEvidence` response. */
export interface RemoveDisputeEvidenceResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const removeDisputeEvidenceResponseSchema: Schema<RemoveDisputeEvidenceResponse>;
