import { Schema } from '../schema';
import { V1Employee } from './v1Employee';
export interface V1ListEmployeesResponse {
    items?: V1Employee[];
}
export declare const v1ListEmployeesResponseSchema: Schema<V1ListEmployeesResponse>;
