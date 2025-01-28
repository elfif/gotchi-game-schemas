import jsonLogic, { RulesLogic } from 'json-logic-js';

// I allow myself to use "any" type here because the rules (logic param) are stored in json files. 
// So by definition we have no idea what variables are expected.
// We could have also used a union of all possible types we use with that function
// But i think it would not have prevented any error .

/* eslint-disable @typescript-eslint/no-explicit-any */
export function evaluateClass(gotchi: any, logic: RulesLogic) {
  const jsl = getJsonLogicInstance()
  return jsl.apply(logic, gotchi) as boolean
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function evaluateTrait(gotchi: any, logic: RulesLogic) {
  const jsl = getJsonLogicInstance()
  return jsl.apply(logic, gotchi) as number
}

export function getJsonLogicInstance() {
  var pow = function(a: number, b: number) { return Math.pow(a, b); };
  var abs = function(a: number) { return Math.abs(a); };
  jsonLogic.add_operation("pow", pow);
  jsonLogic.add_operation("abs", abs);
  return jsonLogic;
}