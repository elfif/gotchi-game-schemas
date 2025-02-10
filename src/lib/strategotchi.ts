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
  const gotchi = { ...originalGotchi };
  gotchi.traits = { ...originalGotchi.traits };

  const strategotchiGotchi = createEmptyStrategotchiGotchi(gotchi.id);
  gotchi.traits.nrg =  mappedTrait(gotchi.traits.nrg) as number
  gotchi.traits.agg =  mappedTrait(gotchi.traits.agg) as number
  gotchi.traits.brn =  mappedTrait(gotchi.traits.brn) as number
  gotchi.traits.spk =  mappedTrait(gotchi.traits.spk) as number
  gotchi.traits.eys =  mappedTrait(gotchi.traits.eys) as number
  gotchi.traits.eyc =  mappedTrait(gotchi.traits.eyc) as number
  
  strategotchiGotchi.id = gotchi.id;
  // Main traits
  strategotchiGotchi.traits.health = Math.floor(evaluateTrait(gotchi.traits, health as RulesLogic) as number);
  strategotchiGotchi.traits.critChance = Math.round(evaluateTrait(gotchi.traits, critChance as RulesLogic) as number * 10) / 10;
  strategotchiGotchi.traits.critDamage = Math.round(evaluateTrait(gotchi.traits, critDamage as RulesLogic) as number * 100) / 100;
  strategotchiGotchi.traits.evasion = Math.round(evaluateTrait(gotchi.traits, evasion as RulesLogic) as number * 10) / 10;
  strategotchiGotchi.traits.stepsCount = Math.round(evaluateTrait(gotchi.traits, stepsCount as RulesLogic) as number * 100) / 100;
  strategotchiGotchi.traits.alchSite = Math.floor(evaluateTrait(gotchi.traits, alchSite as RulesLogic) as number);

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
