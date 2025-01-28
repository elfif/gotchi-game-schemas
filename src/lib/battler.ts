import { Gotchi } from "../types/gotchi";
import { BattlerGotchi } from "../types/battler";
import { evaluateClass } from "./helpers";
import { evaluateTrait } from "./helpers";
import { RulesLogic } from "json-logic-js";
import { Classes } from "../enums/battler";

import cleaver from '../games/gotchi-battler/classes/cleaver.json'
import cursed from '../games/gotchi-battler/classes/cursed.json'
import enlightened from '../games/gotchi-battler/classes/enlightened.json'
import healer from '../games/gotchi-battler/classes/healer.json'
import mage from '../games/gotchi-battler/classes/mage.json'
import ninja from '../games/gotchi-battler/classes/ninja.json'
import tank from '../games/gotchi-battler/classes/tank.json'
import troll from '../games/gotchi-battler/classes/troll.json'

import accuracy from '../games/gotchi-battler/traits/accuracy.json'
import armor from '../games/gotchi-battler/traits/armor.json'
import crit from '../games/gotchi-battler/traits/crit.json'
import evade from '../games/gotchi-battler/traits/evade.json'
import health from '../games/gotchi-battler/traits/health.json'
import magic from '../games/gotchi-battler/traits/magic.json'
import physical from '../games/gotchi-battler/traits/physical.json'
import resist from '../games/gotchi-battler/traits/resist.json'
import speed from '../games/gotchi-battler/traits/speed.json'

export function createBattlerGotchi(gotchi: Gotchi): BattlerGotchi {
  const battlerGotchi = createEmptyBattlerGotchi(gotchi.id);
  
  // Evaluate all classes one by one.
  if (evaluateClass(gotchi.traits, cursed as RulesLogic)) {
    battlerGotchi.classes.push(Classes.CURSED);
  }

  if (evaluateClass(gotchi.traits, cleaver as RulesLogic)) {
    battlerGotchi.classes.push(Classes.CLEAVER);
  }

  if (evaluateClass(gotchi.traits, enlightened as RulesLogic)) {
    battlerGotchi.classes.push(Classes.ENLIGHTENED);
  }

  if (evaluateClass(gotchi.traits, healer as RulesLogic)) {
    battlerGotchi.classes.push(Classes.HEALER);
  }

  if (evaluateClass(gotchi.traits, mage as RulesLogic)) {
    battlerGotchi.classes.push(Classes.MAGE);
  }

  if (evaluateClass(gotchi.traits, ninja as RulesLogic)) {
    battlerGotchi.classes.push(Classes.NINJA);
  }

  if (evaluateClass(gotchi.traits, tank as RulesLogic)) {
    battlerGotchi.classes.push(Classes.TANK);
  }

  if (evaluateClass(gotchi.traits, troll as RulesLogic)) {
    battlerGotchi.classes.push(Classes.TROLL);
  }

  // Evaluate all traits.
  battlerGotchi.traits.accuracy = Math.round(evaluateTrait(gotchi.traits, accuracy as RulesLogic) as number * 10) / 10
  battlerGotchi.traits.armor = Math.round(evaluateTrait(gotchi.traits, armor as RulesLogic) as number)
  battlerGotchi.traits.crit = Math.round(evaluateTrait(gotchi.traits, crit as RulesLogic) as number)
  battlerGotchi.traits.evade = Math.round(evaluateTrait(gotchi.traits, evade as RulesLogic) as number)
  battlerGotchi.traits.health = Math.round(evaluateTrait(gotchi.traits, health as RulesLogic) as number)
  battlerGotchi.traits.magic = Math.round(evaluateTrait(gotchi.traits, magic as RulesLogic) as number)
  battlerGotchi.traits.physical = Math.round(evaluateTrait(gotchi.traits, physical as RulesLogic) as number)
  battlerGotchi.traits.resist = Math.round(evaluateTrait(gotchi.traits, resist as RulesLogic) as number)
  battlerGotchi.traits.speed = Math.round(evaluateTrait(gotchi.traits, speed as RulesLogic) as number)

  return battlerGotchi;
}

function createEmptyBattlerGotchi(id: string): BattlerGotchi {
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
  }
}