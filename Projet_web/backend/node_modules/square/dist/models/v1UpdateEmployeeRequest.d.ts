import { Schema } from '../schema';
import { V1Employee } from './v1Employee';
export interface V1UpdateEmployeeRequest {
    /** Represents one of a business's employees. */
    body: V1Employee;
}
export declare const v1UpdateEmployeeRequestSchema: Schema<V1UpdateEmployeeRequest>;
