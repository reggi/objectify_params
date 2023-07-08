import { Class, MappedArgsClass, PropertyTupleClass } from "../types.ts";

export function objectifyParamsForConstructor<C extends Class, P extends PropertyTupleClass<C>>(
  constructor: C,
  ...properties: P
): new (obj: MappedArgsClass<C, P>) => InstanceType<C> {
  // deno-lint-ignore ban-ts-comment
  // @ts-ignore
  return class extends constructor {
    constructor(obj: MappedArgsClass<C, P>) {
      const args = properties.map((_prop, index) => obj[properties[index] as keyof typeof obj]) as ConstructorParameters<C>;
      super(...args);
    }
  };
}