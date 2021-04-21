import { Schema } from '../schema';
import { V1EmployeeRole } from './v1EmployeeRole';
export interface V1CreateEmployeeRoleRequest {
    /** V1EmployeeRole */
    employeeRole?: V1EmployeeRole;
}
export declare const v1CreateEmployeeRoleRequestSchema: Schema<V1CreateEmployeeRoleRequest>;
