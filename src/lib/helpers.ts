import jsonLogic, { RulesLogic } from 'json-logic-js';

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