import { objectifyParamsForConstructor } from "./constructor/mod.ts";
import { objectifyParamsForFunction } from "./function/mod.ts";
import { objectifyParamsForInstance } from "./instance/mod.ts";

export const objectifyParams = {
  forConstructor: objectifyParamsForConstructor,
  forInstance: objectifyParamsForInstance,
  forFunction: objectifyParamsForFunction
}

export default objectifyParams