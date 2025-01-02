import { RulesLogic } from "json-logic-js";
export type DroptGotchi = {
    id: string;
    traits: {
        hp: number;
        attack: number;
        critPercent: number;
        ap: number;
        doubleStrikeChance: number;
        critDamageIncrease: number;
        evasion: number;
        apRegen: number;
        rangedDamage: number;
        specialEffect: number;
        debuffEffectiveness: number;
        specialCooldownReduction: number;
        piercing: number;
        specialCostReduction: number;
        increasedAttackRange: number;
        armour: number;
        reduceMeleeDamage: number;
        reduceMagicalDamage: number;
        reduceElementalDamage: number;
        apLeech: number;
        hpLeech: number;
        essenceLeech: number;
        moveSpeed: number;
        magnetism: number;
        extraDash: number;
        purveying: number;
    };
};
export type DroptWearable = {
    id: number;
    type: WearableType;
    rarityScoreModifier: number;
    traitsModifiers: Array<number>;
    gameTraitsModifiers: {
        [Property in keyof DroptGotchi["traits"]]?: RulesLogic | null;
    };
};
export type WearableType = "melee" | "ranged" | "shield" | null;
