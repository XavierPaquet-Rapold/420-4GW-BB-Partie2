import { Schema } from '../schema';
import { DisputeEvidence } from './disputeEvidence';
import { Error } from './error';
/** Defines the fields in a `ListDisputeEvidence` response. */
export interface ListDisputeEvidenceResponse {
    /** The list of evidence previously uploaded to the specified dispute. */
    evidence?: DisputeEvidence[];
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const listDisputeEvidenceResponseSchema: Schema<ListDisputeEvidenceResponse>;
