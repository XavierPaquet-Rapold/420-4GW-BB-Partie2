import { Schema } from '../schema';
import { CatalogObject } from './catalogObject';
import { Error } from './error';
export interface BatchRetrieveCatalogObjectsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** A list of [CatalogObject](#type-catalogobject)s returned. */
    objects?: CatalogObject[];
    /** A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `objects` field. */
    relatedObjects?: CatalogObject[];
}
export declare const batchRetrieveCatalogObjectsResponseSchema: Schema<BatchRetrieveCatalogObjectsResponse>;
