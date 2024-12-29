import { Gotchi } from "../types/gotchi";
import { BattlerGotchi } from "../types/battler";
import { evaluateClass } from "./helpers";
import { evaluateTrait } from "./helpers";
import { RulesLogic } from "json-logic-js";
import { Classes } from "../enums/battler";

import cleavers from '../games/gotchi-battler/classes/cleavers.json'
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
  
  if (evaluateClass(gotchi.traits, Classes.CURSED, cursed as RulesLogic)) {
    battlerGotchi.classes.push(Classes.CURSED);
  }

  if (evaluateClass(gotchi.traits, Classes.CLEAVERS, cleavers as RulesLogic)) {
    battlerGotchi.classes.push(Classes.CLEAVERS);
  }

  if (evaluateClass(gotchi.traits, Classes.ENLIGHTENED, enlightened as RulesLogic)) {
    battlerGotchi.classes.push(Classes.ENLIGHTENED);
  }

  if (evaluateClass(gotchi.traits, Classes.HEALER, healer as RulesLogic)) {
    battlerGotchi.classes.push(Classes.HEALER);
  }

  if (evaluateClass(gotchi.traits, Classes.MAGE, mage as RulesLogic)) {
    battlerGotchi.classes.push(Classes.MAGE);
  }

  if (evaluateClass(gotchi.traits, Classes.NINJA, ninja as RulesLogic)) {
    battlerGotchi.classes.push(Classes.NINJA);
  }

  if (evaluateClass(gotchi.traits, Classes.TANK, tank as RulesLogic)) {
    battlerGotchi.classes.push(Classes.TANK);
  }

  if (evaluateClass(gotchi.traits, Classes.TROLL, troll as RulesLogic)) {
    battlerGotchi.classes.push(Classes.TROLL);
  }

  battlerGotchi.traits.accuracy = evaluateTrait(gotchi.traits, 'accuracy', accuracy as RulesLogic) 
  battlerGotchi.traits.armor = evaluateTrait(gotchi.traits, 'armor', armor as RulesLogic)
  battlerGotchi.traits.crit = evaluateTrait(gotchi.traits, 'crit', crit as RulesLogic)
  battlerGotchi.traits.evade = evaluateTrait(gotchi.traits, 'evade', evade as RulesLogic)
  battlerGotchi.traits.health = evaluateTrait(gotchi.traits, 'health', health as RulesLogic)
  battlerGotchi.traits.magic = evaluateTrait(gotchi.traits, 'magic', magic as RulesLogic)
  battlerGotchi.traits.physical = evaluateTrait(gotchi.traits, 'physical', physical as RulesLogic)
  battlerGotchi.traits.resist = evaluateTrait(gotchi.traits, 'resist', resist as RulesLogic)
  battlerGotchi.traits.speed = evaluateTrait(gotchi.traits, 'speed', speed as RulesLogic)

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