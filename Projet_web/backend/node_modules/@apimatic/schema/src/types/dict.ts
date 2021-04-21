import { Schema, SchemaContextCreator, SchemaValidationError } from '../schema';
import { objectEntries } from '../utils';

/**
 * Create a dictionary schema.
 *
 * This can be used to map/unmap a type like Record<string, something>.
 */
export function dict<T, S>(
  itemSchema: Schema<T, S>
): Schema<Record<string, T>, Record<string, S>> {
  const validate = (
    validateFn:
      | 'validateBeforeMap'
      | 'validateBeforeUnmap'
      | 'validateBeforeMapXml',
    value: unknown,
    ctxt: SchemaContextCreator
  ): SchemaValidationError[] => {
    if (typeof value !== 'object' || value === null) {
      return ctxt.fail();
    }
    const valueObject = value as Record<string, unknown>;
    return ctxt.flatmapChildren(
      objectEntries(valueObject),
      itemSchema,
      (v, childCtxt) => itemSchema[validateFn](v[1], childCtxt)
    );
  };

  return {
    type: () => `Record<string,${itemSchema.type()}>`,
    validateBeforeMap: (...args) => validate('validateBeforeMap', ...args),
    validateBeforeUnmap: (...args) => validate('validateBeforeUnmap', ...args),
    map: (value, ctxt) => {
      const output: Record<string, T> = {};
      for (const key in value) {
        /* istanbul ignore else */
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const propValue = value[key];
          output[key] = itemSchema.map(
            propValue,
            ctxt.createChild(key, propValue, itemSchema)
          );
        }
      }
      return output;
    },
    unmap: (value, ctxt) => {
      const output: Record<string, S> = {};
      for (const key in value) {
        /* istanbul ignore else */
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const propValue = value[key];
          output[key] = itemSchema.unmap(
            propValue,
            ctxt.createChild(key, propValue, itemSchema)
          );
        }
      }
      return output;
    },
    validateBeforeMapXml: (...args) =>
      validate('validateBeforeMapXml', ...args),
    mapXml: (value, ctxt) => {
      const output: Record<string, T> = {};
      for (const key in value) {
        /* istanbul ignore else */
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const propValue = value[key];
          output[key] = itemSchema.mapXml(
            propValue,
            ctxt.createChild(key, propValue, itemSchema)
          );
        }
      }
      return output;
    },
    unmapXml: (value, ctxt) => {
      const output: Record<string, S> = {};
      for (const key in value) {
        /* istanbul ignore else */
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const propValue = value[key];
          output[key] = itemSchema.unmapXml(
            propValue,
            ctxt.createChild(key, propValue, itemSchema)
          );
        }
      }
      return output;
    },
  };
}

export function dictWithXmlEntries<T, S>(
  itemSchema: Schema<T, S>
): Schema<Record<string, T>, Record<string, S>> {
  const dictSchema = dict(itemSchema);
  const modifiedSchema = { ...dictSchema };

  modifiedSchema.unmapXml = (value, ctxt) => {
    const output: Record<string, S> = dictSchema.unmapXml(value, ctxt);

    // Convert each entry to XML "entry" elements. The XML "entry" element looks
    // like this: `<entry key="key">value</entry>`. Note that the element name
    // "entry" is set later at the return.
    const entries = objectEntries(output).map(([key, value]) => ({
      $: { key },
      _: value,
    }));

    return { entry: entries };
  };

  modifiedSchema.mapXml = (value, ctxt) => {
    // Empty dictionary
    if (!('entry' in value)) {
      return {};
    }

    let { entry: entries } = value as {
      entry: { $: { key: string }; _: unknown }[];
    };

    // For a single entry, the XML parser gives a single object instead of an array.
    // Make it an array for easier handling.
    if (!Array.isArray(entries)) {
      entries = [entries];
    }

    // Convert entry elements containing a key attribute and content to a dictionary.
    const dictObj: Record<string, unknown> = {};
    for (const item of entries) {
      dictObj[item.$.key] = item._;
    }

    // Run validation on entry values against the item schema.
    // TODO: Maintain context and path when delegating validatin
    return dictSchema.mapXml(dictObj, ctxt);
  };

  modifiedSchema.validateBeforeMapXml = (value, ctxt) => {
    if (typeof value !== 'object' || value === null) {
      return ctxt.fail();
    }

    // Empty dictionary case
    if (!('entry' in value)) {
      return [];
    }

    let entries = (value as { entry: object[] })['entry'];

    // Non-repeating XML elements are passed as a single-object instead of an array of objects.
    // We normalize this behavior of the XML parser.
    if (!Array.isArray(entries)) {
      entries = [entries];
    }

    // Dictionary for all entries
    const dictObj: Record<string, unknown> = {};

    for (let index = 0; index < entries.length; index++) {
      const entry = entries[index];
      // Fail if entry is not an XML element object.
      if (typeof entry !== 'object' || entry === null) {
        return ctxt.fail('Expected "entry" to be an XML element.');
      }

      // Fail if entry does not have an attribute named key.
      if (!('$' in entry) || !('key' in (entry as { $: object }).$)) {
        return ctxt.fail(
          'Expected "entry" element to have an attribute named "key".'
        );
      }

      // Set entry in dictionary
      const typedEntry = entry as { $: { key: string }; _: unknown };
      dictObj[typedEntry.$.key] = typedEntry._;
    }

    // Check all entry values against the item schema.
    // TODO: Maintain context and path when delegating validation
    return dictSchema.validateBeforeMapXml(dictObj, ctxt);
  };

  return modifiedSchema;
}
