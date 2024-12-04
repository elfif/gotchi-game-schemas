"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDroptGotchi = createDroptGotchi;
const helpers_1 = require("./helpers");
const hp_json_1 = __importDefault(require("../games/dropt/traits/hp.json"));
const attack_json_1 = __importDefault(require("../games/dropt/traits/attack.json"));
const crit_json_1 = __importDefault(require("../games/dropt/traits/crit.json"));
const ap_json_1 = __importDefault(require("../games/dropt/traits/ap.json"));
const doubleStrikeChance_json_1 = __importDefault(require("../games/dropt/traits/doubleStrikeChance.json"));
const criticalDamageIncrease_json_1 = __importDefault(require("../games/dropt/traits/criticalDamageIncrease.json"));
const wearables_json_1 = __importDefault(require("../games/dropt/wearables/wearables.json"));
function createDroptGotchi(gotchi) {
    const droptGotchi = createEmptyDroptGotchi(gotchi);
    droptGotchi.traits.hp = (0, helpers_1.evaluateTrait)(gotchi.traits, "hp", hp_json_1.default);
    droptGotchi.traits.attack = (0, helpers_1.evaluateTrait)(gotchi.traits, "attack", attack_json_1.default);
    droptGotchi.traits.critPercent = (0, helpers_1.evaluateTrait)(gotchi.traits, "crit", crit_json_1.default);
    droptGotchi.traits.ap = (0, helpers_1.evaluateTrait)(gotchi.traits, "ap", ap_json_1.default);
    droptGotchi.traits.doubleStrikeChance = (0, helpers_1.evaluateTrait)(gotchi.traits, "doubleStrikeChance", doubleStrikeChance_json_1.default);
    droptGotchi.traits.critDamageIncrease = (0, helpers_1.evaluateTrait)(gotchi.traits, "critDamageIncrease", criticalDamageIncrease_json_1.default);
    const data = wearables_json_1.default;
    for (const wearableId of gotchi.wearables) {
        const wearable = data.find((w) => w.id === wearableId);
        if (wearable) {
            if (wearable.gameTraitsModifiers.hp) {
                droptGotchi.traits.hp = (0, helpers_1.evaluateTrait)(droptGotchi.traits, "hp", wearable.gameTraitsModifiers.hp);
            }
            if (wearable.gameTraitsModifiers.attack) {
                droptGotchi.traits.attack = (0, helpers_1.evaluateTrait)(droptGotchi.traits, "attack", wearable.gameTraitsModifiers.attack);
            }
            if (wearable.gameTraitsModifiers.critPercent) {
                droptGotchi.traits.critPercent = (0, helpers_1.evaluateTrait)(droptGotchi.traits, "crit", wearable.gameTraitsModifiers.critPercent);
            }
            if (wearable.gameTraitsModifiers.ap) {
                droptGotchi.traits.ap = (0, helpers_1.evaluateTrait)(droptGotchi.traits, "ap", wearable.gameTraitsModifiers.ap);
            }
            if (wearable.gameTraitsModifiers.increasedAttackRange) {
                droptGotchi.traits.increasedAttackRange = (0, helpers_1.evaluateTrait)(droptGotchi.traits, "increasedAttackRange", wearable.gameTraitsModifiers.increasedAttackRange);
            }
            if (wearable.gameTraitsModifiers.doubleStrikeChance) {
                droptGotchi.traits.doubleStrikeChance = (0, helpers_1.evaluateTrait)(droptGotchi.traits, "doubleStrikeChance", wearable.gameTraitsModifiers.doubleStrikeChance);
            }
            /*
            Those traits are not implemented in the game yet
            */
            // if (wearable.gameTraitsModifiers.evasion) {
            //   droptGotchi.traits.evasion = evaluateTrait(droptGotchi.traits, "evasion", wearable.gameTraitsModifiers.evasion);
            // }
            // if (wearable.gameTraitsModifiers.apRegen) {
            //   droptGotchi.traits.apRegen = evaluateTrait(droptGotchi.traits, "apRegen", wearable.gameTraitsModifiers.apRegen);
            // }
            // if (wearable.gameTraitsModifiers.rangedDamage) {
            //   droptGotchi.traits.rangedDamage = evaluateTrait(droptGotchi.traits, "rangedDamage", wearable.gameTraitsModifiers.rangedDamage);
            // }
            // if (wearable.gameTraitsModifiers.critDamageIncrease) {
            //   droptGotchi.traits.critDamageIncrease = evaluateTrait(droptGotchi.traits, "critDamageIncrease", wearable.gameTraitsModifiers.critDamageIncrease);
            // }
            // if (wearable.gameTraitsModifiers.specialEffect) {
            //   droptGotchi.traits.specialEffect = evaluateTrait(droptGotchi.traits, "specialEffect", wearable.gameTraitsModifiers.specialEffect);
            // }
            // if (wearable.gameTraitsModifiers.debuffEffectiveness) {
            //   droptGotchi.traits.debuffEffectiveness = evaluateTrait(droptGotchi.traits, "debuffEffectiveness", wearable.gameTraitsModifiers.debuffEffectiveness);
            // }
            // if (wearable.gameTraitsModifiers.specialCooldownReduction) {
            //   droptGotchi.traits.specialCooldownReduction = evaluateTrait(droptGotchi.traits, "specialCooldownReduction", wearable.gameTraitsModifiers.specialCooldownReduction);
            // }
            // if (wearable.gameTraitsModifiers.piercing) {
            //   droptGotchi.traits.piercing = evaluateTrait(droptGotchi.traits, "piercing", wearable.gameTraitsModifiers.piercing);
            // }
            // if (wearable.gameTraitsModifiers.specialCostReduction) {
            //   droptGotchi.traits.specialCostReduction = evaluateTrait(droptGotchi.traits, "specialCostReduction", wearable.gameTraitsModifiers.specialCostReduction);
            // }
            // if (wearable.gameTraitsModifiers.armour) {
            //   droptGotchi.traits.armour = evaluateTrait(droptGotchi.traits, "armour", wearable.gameTraitsModifiers.armour);
            // }
            // if (wearable.gameTraitsModifiers.reduceMeleeDamage) {
            //   droptGotchi.traits.reduceMeleeDamage = evaluateTrait(droptGotchi.traits, "reduceMeleeDamage", wearable.gameTraitsModifiers.reduceMeleeDamage);
            // }
            // if (wearable.gameTraitsModifiers.reduceMagicalDamage) {
            //   droptGotchi.traits.reduceMagicalDamage = evaluateTrait(droptGotchi.traits, "reduceMagicalDamage", wearable.gameTraitsModifiers.reduceMagicalDamage);
            // }
            // if (wearable.gameTraitsModifiers.reduceElementalDamage) {
            //   droptGotchi.traits.reduceElementalDamage = evaluateTrait(droptGotchi.traits, "reduceElementalDamage", wearable.gameTraitsModifiers.reduceElementalDamage);
            // }
            // if (wearable.gameTraitsModifiers.apLeech) {
            //   droptGotchi.traits.apLeech = evaluateTrait(droptGotchi.traits, "apLeech", wearable.gameTraitsModifiers.apLeech);
            // }
            // if (wearable.gameTraitsModifiers.hpLeech) {
            //   droptGotchi.traits.hpLeech = evaluateTrait(droptGotchi.traits, "hpLeech", wearable.gameTraitsModifiers.hpLeech);
            // }
            // if (wearable.gameTraitsModifiers.essenceLeech) {
            //   droptGotchi.traits.essenceLeech = evaluateTrait(droptGotchi.traits, "essenceLeech", wearable.gameTraitsModifiers.essenceLeech);
            // }
            // if (wearable.gameTraitsModifiers.moveSpeed) {
            //   droptGotchi.traits.moveSpeed = evaluateTrait(droptGotchi.traits, "moveSpeed", wearable.gameTraitsModifiers.moveSpeed);
            // }
            // if (wearable.gameTraitsModifiers.magnetism) {
            //   droptGotchi.traits.magnetism = evaluateTrait(droptGotchi.traits, "magnetism", wearable.gameTraitsModifiers.magnetism);
            // }
            // if (wearable.gameTraitsModifiers.extraDash) {
            //   droptGotchi.traits.extraDash = evaluateTrait(droptGotchi.traits, "extraDash", wearable.gameTraitsModifiers.extraDash);
            // }
            // if (wearable.gameTraitsModifiers.purveying) {
            //   droptGotchi.traits.purveying = evaluateTrait(droptGotchi.traits, "purveying", wearable.gameTraitsModifiers.purveying);
            // }
        }
    }
    return droptGotchi;
}
function createEmptyDroptGotchi(gotchi) {
    return {
        id: gotchi.id,
        traits: {
            hp: 0,
            attack: 0,
            critPercent: 0,
            ap: 0,
            evasion: 0,
            apRegen: 0,
            rangedDamage: 0,
            critDamageIncrease: 0,
            specialEffect: 0,
            debuffEffectiveness: 0,
            specialCooldownReduction: 0,
            piercing: 0,
            specialCostReduction: 0,
            increasedAttackRange: 0,
            doubleStrikeChance: 0,
            armour: 0,
            reduceMeleeDamage: 0,
            reduceMagicalDamage: 0,
            reduceElementalDamage: 0,
            apLeech: 0,
            hpLeech: 0,
            essenceLeech: 0,
            moveSpeed: 1,
            magnetism: 0,
            extraDash: 0,
            purveying: 0,
        },
    };
}
//# sourceMappingURL=dropt.js.map