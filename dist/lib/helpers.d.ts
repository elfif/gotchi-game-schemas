import jsonLogic, { RulesLogic } from 'json-logic-js';
export declare function evaluateClass(gotchi: any, className: string, logic: RulesLogic): boolean;
export declare function evaluateTrait(gotchi: any, traitName: string, logic: RulesLogic): number;
export declare function getJsonLogicInstance(): typeof jsonLogic;
