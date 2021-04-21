import { Schema } from '../schema';
import {
  createSymmetricSchema,
  identityFn,
  isNumericString,
  toValidator,
  coerceNumericStringToNumber,
  coerceStringOrNumberToBigInt,
} from '../utils';

function isValidStringValue(value: unknown): value is string {
  return typeof value === 'string';
}

/** Create a string schema. */
export function string(): Schema<string, string> {
  return createSymmetricSchema({
    type: 'string',
    validate: toValidator(isValidStringValue),
    map: identityFn,
  });
}

/** Create a number schema. */
export function number(): Schema<number, number> {
  return createSymmetricSchema({
    type: 'number',
    validate: toValidator(isNumericString),
    map: coerceNumericStringToNumber,
  });
}

function isValidBooleanValue(value: unknown): boolean {
  return (
    typeof value === 'boolean' ||
    (typeof value === 'string' && (value === 'true' || value === 'false'))
  );
}

/** Create a boolean schema. */
export function boolean(): Schema<boolean, boolean> {
  return createSymmetricSchema({
    type: 'boolean',
    validate: toValidator(isValidBooleanValue),
    map: value => (typeof value === 'boolean' ? value : value === 'true'),
  });
}

function isValidBigIntValue(value: unknown): value is bigint {
  return (
    typeof value === 'bigint' ||
    typeof value === 'number' ||
    (typeof value === 'string' && /^-?\d+$/.test(value))
  );
}

/** Create a bigint schema */
export function bigint(): Schema<bigint, bigint> {
  return createSymmetricSchema({
    type: 'bigint',
    validate: toValidator(isValidBigIntValue),
    map: coerceStringOrNumberToBigInt,
  });
}
