import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { objectifyParamsForConstructor } from "./mod.ts";

class Boom {
  constructor(public a: string, public b: string) {}
}

Deno.test("objectifyParamsForConstructor should create a new class with mapped constructor arguments", () => {
  const NewBoom = objectifyParamsForConstructor(Boom, "a", "b");

  const instance = new NewBoom({ a: "Hello", b: "World" });

  assertEquals(instance.a, "Hello");
  assertEquals(instance.b, "World");
});