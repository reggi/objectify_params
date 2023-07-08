import { Class, MappedArgsClass, PropertyTupleClass } from "../types.ts";

export function objectifyParamsForInstance<C extends Class, P extends PropertyTupleClass<C>>(
  constructor: C,
  ...properties: P
) {
  return (obj: MappedArgsClass<C, P>): InstanceType<C> => {
    const args = properties.map((_prop, index) => obj[properties[index] as keyof typeof obj]) as ConstructorParameters<C>;
    return new constructor(...args);
  };
}
