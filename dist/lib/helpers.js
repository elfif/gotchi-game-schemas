"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateClass = evaluateClass;
exports.evaluateTrait = evaluateTrait;
exports.getJsonLogicInstance = getJsonLogicInstance;
const json_logic_js_1 = __importDefault(require("json-logic-js"));
function evaluateClass(gotchi, className, logic) {
    const jsl = getJsonLogicInstance();
    return jsl.apply(logic, gotchi);
}
function evaluateTrait(gotchi, traitName, logic) {
    const jsl = getJsonLogicInstance();
    return jsl.apply(logic, gotchi);
}
function getJsonLogicInstance() {
    var pow = function (a, b) { return Math.pow(a, b); };
    json_logic_js_1.default.add_operation("pow", pow);
    return json_logic_js_1.default;
}
//# sourceMappingURL=helpers.js.map