import jsonLogic, { RulesLogic } from 'json-logic-js';
export declare function evaluateClass(gotchi: any, logic: RulesLogic): boolean;
export declare function evaluateTrait(gotchi: any, logic: RulesLogic): number;
export declare function getJsonLogicInstance(): typeof jsonLogic;
