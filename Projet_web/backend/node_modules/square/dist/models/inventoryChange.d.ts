import { Schema } from '../schema';
import { InventoryAdjustment } from './inventoryAdjustment';
import { InventoryPhysicalCount } from './inventoryPhysicalCount';
import { InventoryTransfer } from './inventoryTransfer';
/**
 * Represents a single physical count, inventory, adjustment, or transfer
 * that is part of the history of inventory changes for a particular
 * `CatalogObject`.
 */
export interface InventoryChange {
    /** Indicates how the inventory change was applied to a tracked quantity of items. */
    type?: string;
    /**
     * Represents the quantity of an item variation that is physically present
     * at a specific location, verified by a seller or a seller's employee. For example,
     * a physical count might come from an employee counting the item variations on
     * hand or from syncing with an external system.
     */
    physicalCount?: InventoryPhysicalCount;
    /**
     * Represents a change in state or quantity of product inventory at a
     * particular time and location.
     */
    adjustment?: InventoryAdjustment;
    /**
     * Represents the transfer of a quantity of product inventory at a
     * particular time from one location to another.
     */
    transfer?: InventoryTransfer;
}
export declare const inventoryChangeSchema: Schema<InventoryChange>;
