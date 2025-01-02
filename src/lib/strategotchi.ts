import { Gotchi } from "../types/gotchi";
import { StrateGotchi } from "../types/strategotchi";

import health from "../games/strategotchi/traits/health.json";
import critChance from "../games/strategotchi/traits/critical_chance.json";
import critDamage from "../games/strategotchi/traits/critical_damage.json";
import evasion from "../games/strategotchi/traits/evasion.json";
import stepsCount from "../games/strategotchi/traits/steps_count.json";
import alchSite from "../games/strategotchi/traits/alch_site.json";
import mappedValue from "../games/strategotchi/helpers/mapped_value.json";
import { evaluateTrait } from "./helpers";
import { getJsonLogicInstance } from "./helpers";
import { RulesLogic } from "json-logic-js";

export function createStrategotchiGotchi(gotchi: Gotchi): StrateGotchi {
  const strategotchiGotchi = createEmptyStrategotchiGotchi(gotchi.id);

  gotchi.traits.nrg =  mappedTrait(gotchi.traits.nrg)
  gotchi.traits.agg =  mappedTrait(gotchi.traits.agg)
  gotchi.traits.brn =  mappedTrait(gotchi.traits.brn)
  gotchi.traits.spk =  mappedTrait(gotchi.traits.spk)
  gotchi.traits.eys =  mappedTrait(gotchi.traits.eys)
  gotchi.traits.eyc =  mappedTrait(gotchi.traits.eyc)

  strategotchiGotchi.traits.health = evaluateTrait(gotchi.traits, "health", health as RulesLogic);
  strategotchiGotchi.traits.critChance = evaluateTrait(gotchi.traits, "critChance", critChance as RulesLogic);
  strategotchiGotchi.traits.critDamage = evaluateTrait(gotchi.traits, "critDamage", critDamage as RulesLogic);
  strategotchiGotchi.traits.evasion = evaluateTrait(gotchi.traits, "evasion", evasion as RulesLogic);
  strategotchiGotchi.traits.stepsCount = evaluateTrait(gotchi.traits, "stepsCount", stepsCount as RulesLogic);
  strategotchiGotchi.traits.alchSite = evaluateTrait(gotchi.traits, "alchSite", alchSite as RulesLogic);

  return strategotchiGotchi;
}



function mappedTrait(originalValue: number) {
  const jsl = getJsonLogicInstance()
  const value = { value: originalValue }
  return jsl.apply(mappedValue as RulesLogic, value)
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
  };
}
