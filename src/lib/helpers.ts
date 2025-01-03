import jsonLogic, { RulesLogic } from 'json-logic-js';

export function evaluateClass(gotchi: any, className: string, logic: RulesLogic) {
  const jsl = getJsonLogicInstance()
  return jsl.apply(logic, gotchi) as boolean
}

export function evaluateTrait(gotchi: any, traitName: string, logic: RulesLogic) {
  const jsl = getJsonLogicInstance()
  return jsl.apply(logic, gotchi) as number
}

export function getJsonLogicInstance() {
  var pow = function(a: number, b: number) { return Math.pow(a, b); };
  jsonLogic.add_operation("pow", pow);
  return jsonLogic;
}