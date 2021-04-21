import { Schema } from '../schema';
import { Error } from './error';
import { InventoryCount } from './inventoryCount';
export interface BatchChangeInventoryResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The current counts for all objects referenced in the request. */
    counts?: InventoryCount[];
}
export declare const batchChangeInventoryResponseSchema: Schema<BatchChangeInventoryResponse>;
