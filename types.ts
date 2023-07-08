// deno-lint-ignore-file no-explicit-any

export type Class<T = any> = new (...args: any[]) => T;

export type MappedArgsClass<T, P extends PropertyKey[]> = {
  [K in P[number]]: T extends new (...args: infer U) => any ? U[number] : never;
};

export type PropertyTupleClass<F extends Class<any>> = F extends new (...args: infer A) => any ? A extends unknown[] ? { [K in keyof A]: PropertyKey } : never : never;

export type Func<T = any> = (...args: any[]) => T;

export type ArgTypes<T> = T extends (...args: infer U ) => any ? U : never;

export type MappedArgsFunc<T, P extends PropertyKey[]> = {
  [K in P[number]]: T extends (...args: infer U ) => any ? U[number] : never;
}

export type PropertyTupleFunc<F extends Func> = F extends (...args: infer A) => any ? A extends unknown[] ? { [K in keyof A]: PropertyKey } : never : never;
