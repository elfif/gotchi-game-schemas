import { RulesLogic } from "json-logic-js";

export type DroptGotchi = {
  id: string;
  traits: {
    //primary traits
    hp: number;
    attack: number;
    critPercent: number;
    ap: number;
    doubleStrikeChance: number;
    critDamageIncrease: number;
    /* 
      secondary traits
      unused for now.
    */
    evasion: number;
    apRegen: number;
    rangedDamage: number;
    // Attack
    specialEffect: number;
    debuffEffectiveness: number;
    specialCooldownReduction: number;
    piercing: number;
    specialCostReduction: number;
    increasedAttackRange: number;    
    // Survivability
    armour: number;
    reduceMeleeDamage: number;
    reduceMagicalDamage: number;
    reduceElementalDamage: number;
    apLeech: number;
    hpLeech: number;
    essenceLeech: number;
    // Environment
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
    [Property in keyof DroptGotchi["traits"]]?: RulesLogic | null
  };
};

export type WearableType = "melee" | "ranged" | "shield" | null;
