import { Schema } from '../schema';
import { V1EmployeeRole } from './v1EmployeeRole';
export interface V1UpdateEmployeeRoleRequest {
    /** V1EmployeeRole */
    body: V1EmployeeRole;
}
export declare const v1UpdateEmployeeRoleRequestSchema: Schema<V1UpdateEmployeeRoleRequest>;
