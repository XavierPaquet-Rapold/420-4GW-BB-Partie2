import { Schema } from '../schema';
import { EmployeeWage } from './employeeWage';
import { Error } from './error';
/**
 * The response to a request for a set of `EmployeeWage` objects. Contains
 * a set of `EmployeeWage`.
 */
export interface ListEmployeeWagesResponse {
    /** A page of Employee Wage results. */
    employeeWages?: EmployeeWage[];
    /**
     * Value supplied in the subsequent request to fetch the next next page
     * of Employee Wage results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listEmployeeWagesResponseSchema: Schema<ListEmployeeWagesResponse>;
