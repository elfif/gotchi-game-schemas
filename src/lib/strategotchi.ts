import { Gotchi } from "../types/gotchi";
import { StrateGotchi, StrategotchiWearable } from "../types/strategotchi";

import health from "../games/strategotchi/traits/health.json";
import critChance from "../games/strategotchi/traits/critical_chance.json";
import critDamage from "../games/strategotchi/traits/critical_damage.json";
import evasion from "../games/strategotchi/traits/evasion.json";
import stepsCount from "../games/strategotchi/traits/steps_count.json";
import alchSite from "../games/strategotchi/traits/alch_site.json";
import mappedValue from "../games/strategotchi/helpers/mapped_value.json";
import { wearables } from "../games/strategotchi/wearables/wearables";
import { evaluateTrait } from "./helpers";
import { getJsonLogicInstance } from "./helpers";
import { RulesLogic } from "json-logic-js";

const LeftHandSlotIndex = 4;
const RightHandSlotIndex = 5;

export function createStrategotchiGotchi(originalGotchi: Gotchi): StrateGotchi {
  const strategotchiGotchi = createEmptyStrategotchiGotchi(originalGotchi.id);

  const gotchi = { ...originalGotchi };
  
  const traits = {
    nrg:  mappedTrait(originalGotchi.traits.nrg) as number,
    agg:  mappedTrait(originalGotchi.traits.agg) as number,
    brn:  mappedTrait(originalGotchi.traits.brn) as number,
    spk:  mappedTrait(originalGotchi.traits.spk) as number,
    eys:  mappedTrait(originalGotchi.traits.eys) as number,
    eyc:  mappedTrait(originalGotchi.traits.eyc) as number,
  }
  
  strategotchiGotchi.id = gotchi.id;
  // Main traits
  strategotchiGotchi.traits.health = Math.round(evaluateTrait(traits, health as RulesLogic) as number);
  strategotchiGotchi.traits.critChance = Math.round(evaluateTrait(traits, critChance as RulesLogic) as number);
  strategotchiGotchi.traits.critDamage = Math.round(evaluateTrait(traits, critDamage as RulesLogic) as number);
  strategotchiGotchi.traits.evasion = Math.round(evaluateTrait(traits, evasion as RulesLogic) as number);
  strategotchiGotchi.traits.stepsCount = Math.round(evaluateTrait(traits, stepsCount as RulesLogic) as number * 100) / 100;
  strategotchiGotchi.traits.alchSite = Math.round(evaluateTrait(traits, alchSite as RulesLogic) as number);

  // Hands / weapons
  const leftHand = wearables.find(wearable => wearable.id === gotchi.wearables[LeftHandSlotIndex]);
  const rightHand = wearables.find(wearable => wearable.id === gotchi.wearables[RightHandSlotIndex]);

  leftHand && (strategotchiGotchi.leftHand = leftHand);
  rightHand && (strategotchiGotchi.rightHand = rightHand);

  return strategotchiGotchi;
}

function mappedTrait(originalValue: number) {
  const jsl = getJsonLogicInstance()
  const value = { value: originalValue }
  return jsl.apply(mappedValue as RulesLogic, value) as number
}

function createEmptyStrategotchiGotchi(id: string): StrateGotchi {
  return {
    id,
    traits: {
      health: 0,
      critChance: 0,
      critDamage: 0,
      evasion: 0,
      stepsCount: 0,
      alchSite: 0,
    },
    leftHand: createEmptyStrategotchiWearable(),
    rightHand: createEmptyStrategotchiWearable(),
  };
}

export function createEmptyStrategotchiWearable(): StrategotchiWearable {
  return {
    id: -1,
    name: "Empty hand",
    type: "melee",
    damage: 5,
    specialAbilities: [],
  };
}
