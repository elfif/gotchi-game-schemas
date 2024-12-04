"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBattlerGotchi = createBattlerGotchi;
const helpers_1 = require("./helpers");
const helpers_2 = require("./helpers");
const battler_1 = require("../enums/battler");
const cleavers_json_1 = __importDefault(require("../games/gotchi-battler/classes/cleavers.json"));
const cursed_json_1 = __importDefault(require("../games/gotchi-battler/classes/cursed.json"));
const enlightened_json_1 = __importDefault(require("../games/gotchi-battler/classes/enlightened.json"));
const healer_json_1 = __importDefault(require("../games/gotchi-battler/classes/healer.json"));
const mage_json_1 = __importDefault(require("../games/gotchi-battler/classes/mage.json"));
const ninja_json_1 = __importDefault(require("../games/gotchi-battler/classes/ninja.json"));
const tank_json_1 = __importDefault(require("../games/gotchi-battler/classes/tank.json"));
const troll_json_1 = __importDefault(require("../games/gotchi-battler/classes/troll.json"));
const accuracy_json_1 = __importDefault(require("../games/gotchi-battler/traits/accuracy.json"));
const armor_json_1 = __importDefault(require("../games/gotchi-battler/traits/armor.json"));
const crit_json_1 = __importDefault(require("../games/gotchi-battler/traits/crit.json"));
const evade_json_1 = __importDefault(require("../games/gotchi-battler/traits/evade.json"));
const health_json_1 = __importDefault(require("../games/gotchi-battler/traits/health.json"));
const magic_json_1 = __importDefault(require("../games/gotchi-battler/traits/magic.json"));
const physical_json_1 = __importDefault(require("../games/gotchi-battler/traits/physical.json"));
const resist_json_1 = __importDefault(require("../games/gotchi-battler/traits/resist.json"));
const speed_json_1 = __importDefault(require("../games/gotchi-battler/traits/speed.json"));
function createBattlerGotchi(gotchi) {
    const battlerGotchi = createEmptyBattlerGotchi(gotchi.id);
    if ((0, helpers_1.evaluateClass)(gotchi.traits, battler_1.Classes.CURSED, cursed_json_1.default)) {
        battlerGotchi.classes.push(battler_1.Classes.CURSED);
    }
    if ((0, helpers_1.evaluateClass)(gotchi.traits, battler_1.Classes.CLEAVERS, cleavers_json_1.default)) {
        battlerGotchi.classes.push(battler_1.Classes.CLEAVERS);
    }
    if ((0, helpers_1.evaluateClass)(gotchi.traits, battler_1.Classes.ENLIGHTENED, enlightened_json_1.default)) {
        battlerGotchi.classes.push(battler_1.Classes.ENLIGHTENED);
    }
    if ((0, helpers_1.evaluateClass)(gotchi.traits, battler_1.Classes.HEALER, healer_json_1.default)) {
        battlerGotchi.classes.push(battler_1.Classes.HEALER);
    }
    if ((0, helpers_1.evaluateClass)(gotchi.traits, battler_1.Classes.MAGE, mage_json_1.default)) {
        battlerGotchi.classes.push(battler_1.Classes.MAGE);
    }
    if ((0, helpers_1.evaluateClass)(gotchi.traits, battler_1.Classes.NINJA, ninja_json_1.default)) {
        battlerGotchi.classes.push(battler_1.Classes.NINJA);
    }
    if ((0, helpers_1.evaluateClass)(gotchi.traits, battler_1.Classes.TANK, tank_json_1.default)) {
        battlerGotchi.classes.push(battler_1.Classes.TANK);
    }
    if ((0, helpers_1.evaluateClass)(gotchi.traits, battler_1.Classes.TROLL, troll_json_1.default)) {
        battlerGotchi.classes.push(battler_1.Classes.TROLL);
    }
    battlerGotchi.traits.accuracy = (0, helpers_2.evaluateTrait)(gotchi.traits, 'accuracy', accuracy_json_1.default);
    battlerGotchi.traits.armor = (0, helpers_2.evaluateTrait)(gotchi.traits, 'armor', armor_json_1.default);
    battlerGotchi.traits.crit = (0, helpers_2.evaluateTrait)(gotchi.traits, 'crit', crit_json_1.default);
    battlerGotchi.traits.evade = (0, helpers_2.evaluateTrait)(gotchi.traits, 'evade', evade_json_1.default);
    battlerGotchi.traits.health = (0, helpers_2.evaluateTrait)(gotchi.traits, 'health', health_json_1.default);
    battlerGotchi.traits.magic = (0, helpers_2.evaluateTrait)(gotchi.traits, 'magic', magic_json_1.default);
    battlerGotchi.traits.physical = (0, helpers_2.evaluateTrait)(gotchi.traits, 'physical', physical_json_1.default);
    battlerGotchi.traits.resist = (0, helpers_2.evaluateTrait)(gotchi.traits, 'resist', resist_json_1.default);
    battlerGotchi.traits.speed = (0, helpers_2.evaluateTrait)(gotchi.traits, 'speed', speed_json_1.default);
    return battlerGotchi;
}
function createEmptyBattlerGotchi(id) {
    return {
        id: id,
        classes: [],
        traits: {
            accuracy: 0,
            armor: 0,
            crit: 0,
            evade: 0,
            health: 0,
            magic: 0,
            physical: 0,
            resist: 0,
            speed: 0
        }
    };
}
//# sourceMappingURL=battler.js.map