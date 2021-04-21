import { Schema } from '../schema';
/** V1EmployeeRole */
export interface V1EmployeeRole {
    /** The role's unique ID, Can only be set by Square. */
    id?: string;
    /** The role's merchant-defined name. */
    name: string;
    /**
     * The role's permissions.
     * See [V1EmployeeRolePermissions](#type-v1employeerolepermissions) for possible values
     */
    permissions: string[];
    /** If true, employees with this role have all permissions, regardless of the values indicated in permissions. */
    isOwner?: boolean;
    /** The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created. */
    createdAt?: string;
    /** The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated. */
    updatedAt?: string;
}
export declare const v1EmployeeRoleSchema: Schema<V1EmployeeRole>;
