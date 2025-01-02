import jsonLogic, { RulesLogic } from 'json-logic-js';
export declare function evaluateClass(gotchi: any, className: string, logic: RulesLogic): any;
export declare function evaluateTrait(gotchi: any, traitName: string, logic: RulesLogic): any;
export declare function getJsonLogicInstance(): typeof jsonLogic;
