import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { objectifyParamsForInstance } from "./mod.ts";

class Boom {
  constructor(public a: string, public b: string) {}
}

Deno.test("objectifyParamsForInstance", () => {
  const x = objectifyParamsForInstance(Boom, "aaaaaa", "b");
  const y = x({ aaaaaa: 'apple', b: 'banana' });

  assertEquals(y.a, 'apple');
  assertEquals(y.b, 'banana');
});