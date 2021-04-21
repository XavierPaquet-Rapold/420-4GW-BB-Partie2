import { Schema } from '../schema';
import { Shift } from './shift';
/** Represents a request to create a `Shift` */
export interface CreateShiftRequest {
    /** Unique string value to insure the idempotency of the operation. */
    idempotencyKey?: string;
    /**
     * A record of the hourly rate, start, and end times for a single work shift
     * for an employee. May include a record of the start and end times for breaks
     * taken during the shift.
     */
    shift: Shift;
}
export declare const createShiftRequestSchema: Schema<CreateShiftRequest>;
