import { Schema } from '../schema';
/** Represents a physical address. */
export interface Address {
    /**
     * The first line of the address.
     * Fields that start with `address_line` provide the address's most specific
     * details, like street number, street name, and building name. They do *not*
     * provide less specific details like city, state/province, or country (these
     * details are provided in other fields).
     */
    addressLine1?: string;
    /** The second line of the address, if any. */
    addressLine2?: string;
    /** The third line of the address, if any. */
    addressLine3?: string;
    /** The city or town of the address. */
    locality?: string;
    /** A civil region within the address's `locality`, if any. */
    sublocality?: string;
    /** A civil region within the address's `sublocality`, if any. */
    sublocality2?: string;
    /** A civil region within the address's `sublocality_2`, if any. */
    sublocality3?: string;
    /**
     * A civil entity within the address's country. In the US, this
     * is the state.
     */
    administrativeDistrictLevel1?: string;
    /**
     * A civil entity within the address's `administrative_district_level_1`.
     * In the US, this is the county.
     */
    administrativeDistrictLevel2?: string;
    /**
     * A civil entity within the address's `administrative_district_level_2`,
     * if any.
     */
    administrativeDistrictLevel3?: string;
    /** The address's postal code. */
    postalCode?: string;
    /**
     * Indicates the country associated with another entity, such as a business.
     * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
     */
    country?: string;
    /** Optional first name when it's representing recipient. */
    firstName?: string;
    /** Optional last name when it's representing recipient. */
    lastName?: string;
    /** Optional organization name when it's representing recipient. */
    organization?: string;
}
export declare const addressSchema: Schema<Address>;
