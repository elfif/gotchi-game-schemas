import { Gotchi } from "../types/gotchi";
import { DroptGotchi, DroptWearable } from "../types/dropt";
import { evaluateTrait, getJsonLogicInstance } from "./helpers";
import { RulesLogic } from "json-logic-js";
import hp from "../games/dropt/traits/hp.json";
import attack from "../games/dropt/traits/attack.json";
import crit from "../games/dropt/traits/crit.json";
import ap from "../games/dropt/traits/ap.json";
import deltaLogic from "../games/dropt/helpers/delta.json";
import doubleStrikeChance from "../games/dropt/traits/doubleStrikeChance.json";
import critDamageIncrease from "../games/dropt/traits/criticalDamageIncrease.json";
import wearables from "../games/dropt/wearables/wearables.json";

const deltaCap = 60;

export function createDroptGotchi(gotchi: Gotchi): DroptGotchi {
  const droptGotchi = createEmptyDroptGotchi(gotchi);

  // A lot of the calculations are based on kinda normalized values of traits
  // We will calculate all those values first and add them to that object.
  const gotchiDelta = {
    nrg: delta(gotchi.traits.nrg),
    spk: delta(gotchi.traits.spk),
    brn: delta(gotchi.traits.brn),
    agg: delta(gotchi.traits.agg),
    eys: delta(gotchi.traits.eys),
    eyc: delta(gotchi.traits.eyc),
    brs: gotchi.traits.brs,
  };

  droptGotchi.traits.hp = evaluateTrait(
    gotchiDelta,
    hp as RulesLogic
  ) as number;
  droptGotchi.traits.attack = evaluateTrait(
    gotchiDelta,
    attack as RulesLogic
  ) as number;
  droptGotchi.traits.critPercent =
    evaluateTrait(gotchiDelta, crit as RulesLogic) as number;
  droptGotchi.traits.ap = evaluateTrait(
    gotchiDelta,
    ap as RulesLogic
  ) as number;
  droptGotchi.traits.doubleStrikeChance = evaluateTrait(
    gotchiDelta,
    doubleStrikeChance as RulesLogic
  ) as number;
  droptGotchi.traits.critDamageIncrease = evaluateTrait(
    gotchiDelta,
    critDamageIncrease as RulesLogic
  ) as number;

  const data = wearables as Array<DroptWearable>;
  for (const wearableId of gotchi.wearables) {
    const wearable = data.find((w) => w.id === wearableId);
    if (wearable) {
      if (wearable.gameTraitsModifiers.hp) {
        droptGotchi.traits.hp = Math.round(evaluateTrait(
          droptGotchi.traits,
          wearable.gameTraitsModifiers.hp
        ) as number);
      }
      if (wearable.gameTraitsModifiers.attack) {
        droptGotchi.traits.attack = Math.round(evaluateTrait(
          droptGotchi.traits,
          wearable.gameTraitsModifiers.attack
        ) as number);
      }
      if (wearable.gameTraitsModifiers.critPercent) {
        droptGotchi.traits.critPercent = Math.round(evaluateTrait(
          droptGotchi.traits,
          wearable.gameTraitsModifiers.critPercent
        ) as number);
      }
      if (wearable.gameTraitsModifiers.ap) {
        droptGotchi.traits.ap = Math.round(evaluateTrait(
          droptGotchi.traits,
          wearable.gameTraitsModifiers.ap
        ) as number);
      }
      // if (wearable.gameTraitsModifiers.increasedAttackRange) {
      //   droptGotchi.traits.increasedAttackRange = Math.round(
      //     evaluateTrait(
      //       droptGotchi.traits,
      //       wearable.gameTraitsModifiers.increasedAttackRange
      //     ) as number
      //   );
      // }
      // if (wearable.gameTraitsModifiers.doubleStrikeChance) {
      //   console.log("wearable.gameTraitsModifiers.doubleStrikeChance", wearable.gameTraitsModifiers.doubleStrikeChance);
      //   droptGotchi.traits.doubleStrikeChance = Math.round(
      //     evaluateTrait(
      //       droptGotchi.traits,
      //       wearable.gameTraitsModifiers.doubleStrikeChance
      //     ) as number
      //   );
      // }
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
  // We end up by rounding some of the numbers
  droptGotchi.traits.hp = Math.round(droptGotchi.traits.hp);
  droptGotchi.traits.attack = Math.round(droptGotchi.traits.attack);
  droptGotchi.traits.critPercent =
    Math.round(droptGotchi.traits.critPercent * 10) / 10;
  droptGotchi.traits.ap = Math.round(droptGotchi.traits.ap);
  droptGotchi.traits.critDamageIncrease =
    Math.floor(droptGotchi.traits.critDamageIncrease * 100) / 100;
  droptGotchi.traits.doubleStrikeChance =
    Math.floor(droptGotchi.traits.doubleStrikeChance * 10) / 10;

  return droptGotchi;
}

function delta(value: number) {
  const jsl = getJsonLogicInstance();
  return jsl.apply(deltaLogic as RulesLogic, { value, deltaCap }) as number;
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
