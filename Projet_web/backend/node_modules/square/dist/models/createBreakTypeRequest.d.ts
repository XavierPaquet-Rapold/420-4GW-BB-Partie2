import { Schema } from '../schema';
import { BreakType } from './breakType';
/** A request to create a new `BreakType` */
export interface CreateBreakTypeRequest {
    /** Unique string value to insure idempotency of the operation */
    idempotencyKey?: string;
    /**
     * A defined break template that sets an expectation for possible `Break`
     * instances on a `Shift`.
     */
    breakType: BreakType;
}
export declare const createBreakTypeRequestSchema: Schema<CreateBreakTypeRequest>;
