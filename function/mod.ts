import { ArgTypes, Func, MappedArgsFunc, PropertyTupleFunc } from "../types.ts";

export function objectifyParamsForFunction<F extends Func, P extends PropertyTupleFunc<F>>(func: F, ...properties: P) {
  return (obj: MappedArgsFunc<F, P>): ReturnType<F> => {
    const args = properties.map((_prop, index) => obj[properties[index] as keyof typeof obj]) as ArgTypes<F>;
    return func(...args);
  }
}