import { Schema } from '../schema';
import { V1EmployeeRole } from './v1EmployeeRole';
export interface V1ListEmployeeRolesResponse {
    items?: V1EmployeeRole[];
}
export declare const v1ListEmployeeRolesResponseSchema: Schema<V1ListEmployeeRolesResponse>;
