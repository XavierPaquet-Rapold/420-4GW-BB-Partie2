import { Schema } from '../schema';
import { EmployeeWage } from './employeeWage';
import { Error } from './error';
/**
 * A response to a request to get an `EmployeeWage`. Contains
 * the requested `EmployeeWage` objects. May contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface GetEmployeeWageResponse {
    /**
     * The hourly wage rate that an employee will earn on a `Shift` for doing the job
     * specified by the `title` property of this object. Deprecated at verison 2020-08-26. Use `TeamMemberWage` instead.
     */
    employeeWage?: EmployeeWage;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const getEmployeeWageResponseSchema: Schema<GetEmployeeWageResponse>;
