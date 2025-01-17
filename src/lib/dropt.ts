import { Gotchi } from "../types/gotchi";
import { DroptGotchi, DroptWearable } from "../types/dropt";
import { evaluateTrait } from "./helpers";
import { RulesLogic } from "json-logic-js";
import hp from "../games/dropt/traits/hp.json";
import attack from "../games/dropt/traits/attack.json";
import crit from "../games/dropt/traits/crit.json";
import ap from "../games/dropt/traits/ap.json";
import doubleStrikeChance from "../games/dropt/traits/doubleStrikeChance.json";
import critDamageIncrease from "../games/dropt/traits/criticalDamageIncrease.json";
import wearables from "../games/dropt/wearables/wearables.json";

export function createDroptGotchi(gotchi: Gotchi): DroptGotchi {
  const droptGotchi = createEmptyDroptGotchi(gotchi);

  droptGotchi.traits.hp = evaluateTrait(gotchi.traits, "hp", hp as RulesLogic) as number;
  droptGotchi.traits.attack = evaluateTrait(
    gotchi.traits,
    "attack",
    attack as RulesLogic
  ) as number;
  droptGotchi.traits.critPercent = evaluateTrait(
    gotchi.traits,
    "crit",
    crit as RulesLogic
  ) as number;
  droptGotchi.traits.ap = evaluateTrait(gotchi.traits, "ap", ap as RulesLogic) as number;
  droptGotchi.traits.doubleStrikeChance = evaluateTrait(
    gotchi.traits,
    "doubleStrikeChance",
    doubleStrikeChance as RulesLogic
  ) as number;
  droptGotchi.traits.critDamageIncrease = evaluateTrait(
    gotchi.traits,
    "critDamageIncrease",
    critDamageIncrease as RulesLogic
  ) as number;

  const data = wearables as Array<DroptWearable>;
  for (const wearableId of gotchi.wearables) {
    const wearable = data.find((w) => w.id === wearableId);
    if (wearable) {
      if (wearable.gameTraitsModifiers.hp) {
        droptGotchi.traits.hp = Math.round(evaluateTrait(
          droptGotchi.traits,
          "hp",
          wearable.gameTraitsModifiers.hp
        ) as number);
      }
      if (wearable.gameTraitsModifiers.attack) {
        droptGotchi.traits.attack = Math.round(evaluateTrait(
          droptGotchi.traits,
          "attack",
          wearable.gameTraitsModifiers.attack
        ) as number);
      }
      if (wearable.gameTraitsModifiers.critPercent) {
        droptGotchi.traits.critPercent = Math.round(evaluateTrait(
          droptGotchi.traits,
          "crit",
          wearable.gameTraitsModifiers.critPercent
        ) as number);
      }
      if (wearable.gameTraitsModifiers.ap) {
        droptGotchi.traits.ap = Math.round(evaluateTrait(
          droptGotchi.traits,
          "ap",
          wearable.gameTraitsModifiers.ap
        ) as number);
      }
      if (wearable.gameTraitsModifiers.increasedAttackRange) {
        droptGotchi.traits.increasedAttackRange = Math.round(evaluateTrait(
          droptGotchi.traits,
          "increasedAttackRange",
          wearable.gameTraitsModifiers.increasedAttackRange
        ) as number);
      }
      if (wearable.gameTraitsModifiers.doubleStrikeChance) {
        droptGotchi.traits.doubleStrikeChance = Math.round(evaluateTrait(
          droptGotchi.traits,
          "doubleStrikeChance",
          wearable.gameTraitsModifiers.doubleStrikeChance
        ) as number);
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

function createEmptyDroptGotchi(gotchi: Gotchi): DroptGotchi {
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
    rightHand: null,
    leftHand: null,
    head: null,
    body: null,
    face: null,
    eyes: null,
    pet: null,
  };
}
