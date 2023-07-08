import { objectifyParamsForFunction } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";

Deno.test("convertArgsToObject should convert function args to object properties", () => {
  const plusThree = (a: number, b: number, c: number) => a + b + c;
  const wrappedPlusThree = objectifyParamsForFunction(plusThree, 'value1', 'value2', 'value3');
  const result = wrappedPlusThree({ value1: 1, value2: 2, value3: 3 }); 
  assertEquals(result, 6);
});