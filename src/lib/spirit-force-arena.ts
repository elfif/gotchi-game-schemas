import { SfaMaxTraits, SfaMinTraits, SfaTraits, MappedTraits, SpiritForceArenaWeapon } from "types/spirit-force-arena";
import { Gotchi } from "types/gotchi";
import min_traits from "../games/spirit-force-arena/traits/min_traits.json"
import max_traits from "../games/spirit-force-arena/traits/max_traits.json"
import apprentice from "../games/spirit-force-arena/classes/apprentice.json"
import common from "../games/spirit-force-arena/classes/common.json"
import uncommon from "../games/spirit-force-arena/classes/uncommon.json"
import rare from "../games/spirit-force-arena/classes/rare.json"
import legendary from "../games/spirit-force-arena/classes/legendary.json"
import mythical from "../games/spirit-force-arena/classes/mythical.json"
import godlike from "../games/spirit-force-arena/classes/godlike.json"
import mapped_value from "../games/spirit-force-arena/helpers/mapped_value.json"
import hp from "../games/spirit-force-arena/traits/hp.json"
import ap from "../games/spirit-force-arena/traits/ap.json"
import melee_damage from "../games/spirit-force-arena/traits/melee_damage.json"
import ranged_damage from "../games/spirit-force-arena/traits/ranged_damage.json"
import ads_view from "../games/spirit-force-arena/traits/ads_view.json"
import luck from "../games/spirit-force-arena/traits/luck.json"
import { evaluateClass, evaluateTrait, getJsonLogicInstance } from "./helpers"
import { RulesLogic } from "json-logic-js"
import { SfaClasses } from "../enums/spirit-force-arena"

function getTraitsMinValues(): SfaMinTraits {
  return min_traits;
}

function getTraitsMaxValues(className: SfaClasses): SfaMaxTraits {
  if (max_traits[className]) {
    return max_traits[className]
  }
  return max_traits[SfaClasses.DIVINE]
}

function getGotchiClass(gotchi: Gotchi): SfaClasses {
  if (evaluateClass(gotchi.traits, apprentice as RulesLogic)) {
    return SfaClasses.APPRENTICE;
  }
  if (evaluateClass(gotchi.traits, common as RulesLogic)) {
    return SfaClasses.COMMON;
  }
  if (evaluateClass(gotchi.traits, uncommon as RulesLogic)) {
    return SfaClasses.UNCOMMON;
  }
  if (evaluateClass(gotchi.traits, rare as RulesLogic)) {
    return SfaClasses.RARE;
  }
  if (evaluateClass(gotchi.traits, legendary as RulesLogic)) {
    return SfaClasses.LEGENDARY;
  }
  if (evaluateClass(gotchi.traits, mythical as RulesLogic)) {
    return SfaClasses.MYTHICAL;
  }
  if (evaluateClass(gotchi.traits, godlike as RulesLogic)) {
    return SfaClasses.GODLIKE;
  }
  return SfaClasses.DIVINE
}


export function createSpiritForceArenaGotchi(gotchi: Gotchi): SpiritForceArenaGotchi {
  const spiritForceArenaGotchi = new SpiritForceArenaGotchi(gotchi);
  console.log(spiritForceArenaGotchi);
  return spiritForceArenaGotchi;
}

export class SpiritForceArenaGotchi {

  className: SfaClasses;
  traits: SfaTraits & SfaMinTraits & SfaMaxTraits;
  mappedTraits: MappedTraits;
  rightHand: SpiritForceArenaWeapon | null;
  leftHand: SpiritForceArenaWeapon | null;

  constructor(gotchi: Gotchi) {
    this.className = getGotchiClass(gotchi);
    this.traits = {
      hp: 0,
      ap: 0,
      melee_damage: 0,
      ranged_damage: 0,
      ads_view: 0,
      luck: 0,
      stealth: 0,
      critical_chance: 0,
      hp_regen: 0,
      ap_regen: 0,
      active_damage_reduction: 0,
      passive_damage_reduction: 0,
      critical_damages_multiplier: 0,
      movement_speed: 0,
      evasion: 0,
      damage_to_npc: 0,
      melee_basic_boost: 0,
      melee_long_range_boost: 0,
      melee_high_rate_boost: 0,
      melee_pierce_boost: 0,
      ranged_basic_boost: 0,
      ranged_fall_off_boost: 0,
      ranged_magical_boost: 0,
      ranged_sniper_boost: 0,
      basic_grenade_boost: 0,
      impact_grenade_boost: 0,
      ...getTraitsMaxValues(this.className),
      ...getTraitsMinValues()
    }
    this.mappedTraits = {
      bNrg: mappedTrait(gotchi.traits.nrg),
      bAgg: mappedTrait(gotchi.traits.agg),
      bSpk: mappedTrait(gotchi.traits.spk),
      bBrn: mappedTrait(gotchi.traits.brn),
      bEys: mappedTrait(gotchi.traits.eys),
      bEyc: mappedTrait(gotchi.traits.eyc),
    }

    this.traits.hp = evaluateTrait(this.mappedTraits, hp as RulesLogic)
    this.traits.ap = evaluateTrait(this.mappedTraits, ap as RulesLogic)
    this.traits.melee_damage = evaluateTrait(this.mappedTraits, melee_damage as RulesLogic)
    this.traits.ranged_damage = evaluateTrait(this.mappedTraits, ranged_damage as RulesLogic)
    this.traits.ads_view = evaluateTrait(this.mappedTraits, ads_view as RulesLogic)
    this.traits.luck = evaluateTrait(this.mappedTraits, luck as RulesLogic)
    
    this.rightHand = null;
    this.leftHand = null;
  }
  
  getHp(): number {
    return this.getMinMaxValue(this.traits.hp, this.traits.min_hp, this.traits.max_hp);
  }

  getAp(): number {
    return this.getMinMaxValue(this.traits.ap, this.traits.min_ap, this.traits.max_ap);
  }

  getAdsView(): number {
    return this.getMinMaxValue(this.traits.ads_view, this.traits.min_ads_view, this.traits.max_ads_view);
  }

  getLuck(): number {
    return this.getMinMaxValue(this.traits.luck, this.traits.min_luck, this.traits.max_luck);
  }

  getStealth(): number {
    return this.getMinMaxValue(this.traits.stealth, this.traits.min_stealth, this.traits.max_stealth);
  }

  getCriticalChance(): number {
    return this.getMinMaxValue(this.traits.critical_chance, this.traits.min_critical_chance, this.traits.max_critical_chance);
  }

  getHpRegen(): number {
    return this.getMinMaxValue(this.traits.hp_regen, this.traits.min_hp_regen, this.traits.max_hp_regen);
  }

  getApRegen(): number {
    return this.getMinMaxValue(this.traits.ap_regen, this.traits.min_ap_regen, this.traits.max_ap_regen);
  }

  getActiveDamageReduction(): number {
    return this.getMinMaxValue(this.traits.active_damage_reduction, this.traits.min_active_damage_reduction, this.traits.max_active_damage_reduction);
  }

  getPassiveDamageReduction(): number {
    return this.getMinMaxValue(this.traits.passive_damage_reduction, this.traits.min_passive_damage_reduction, this.traits.max_passive_damage_reduction);
  }

  getCriticalDamagesMultiplier(): number {
    return this.getMinMaxValue(this.traits.critical_damages_multiplier, this.traits.min_critical_damages_multiplier, this.traits.max_critical_damages_multiplier);
  }

  getMovementSpeed(): number {
    return this.getMinMaxValue(this.traits.movement_speed, this.traits.min_movement_speed, this.traits.max_movement_speed);
  }

  getEvasion(): number {
    return this.getMinMaxValue(this.traits.evasion, this.traits.min_evasion, this.traits.max_evasion);
  }

  getDamageToNpc(): number {
    return this.getMinMaxValue(this.traits.damage_to_npc, this.traits.min_damage_to_npc, this.traits.max_damage_to_npc);
  }

  getMeleeBasicBoost(): number {
    return this.getMinMaxValue(this.traits.melee_basic_boost, this.traits.min_melee_basic_boost, this.traits.max_melee_basic_boost);
  }

  getMeleeLongRangeBoost(): number {
    return this.getMinMaxValue(this.traits.melee_long_range_boost, this.traits.min_melee_long_range_boost, this.traits.max_melee_long_range_boost);
  }

  getMeleeHighRateBoost(): number {
    return this.getMinMaxValue(this.traits.melee_high_rate_boost, this.traits.min_melee_high_rate_boost, this.traits.max_melee_high_rate_boost);
  }

  getMeleePierceBoost(): number {
    return this.getMinMaxValue(this.traits.melee_pierce_boost, this.traits.min_melee_pierce_boost, this.traits.max_melee_pierce_boost);
  }

  getRangedBasicBoost(): number {
    return this.getMinMaxValue(this.traits.ranged_basic_boost, this.traits.min_ranged_basic_boost, this.traits.max_ranged_basic_boost);
  }

  getRangedFallOffBoost(): number {
    return this.getMinMaxValue(this.traits.ranged_fall_off_boost, this.traits.min_ranged_fall_off_boost, this.traits.max_ranged_fall_off_boost);
  }

  getRangedMagicalBoost(): number {
    return this.getMinMaxValue(this.traits.ranged_magical_boost, this.traits.min_ranged_magical_boost, this.traits.max_ranged_magical_boost);
  }

  getRangedSniperBoost(): number {
    return this.getMinMaxValue(this.traits.ranged_sniper_boost, this.traits.min_ranged_sniper_boost, this.traits.max_ranged_sniper_boost);
  }

  getBasicGrenadeBoost(): number {
    return this.getMinMaxValue(this.traits.basic_grenade_boost, this.traits.min_basic_grenade_boost, this.traits.max_basic_grenade_boost);
  }

  getImpactGrenadeBoost(): number {
    return this.getMinMaxValue(this.traits.impact_grenade_boost, this.traits.min_impact_grenade_boost, this.traits.max_impact_grenade_boost);
  }

  protected getMinMaxValue(value: number, min: number, max: number): number {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }
}

function mappedTrait(originalValue: number) {
  const jsl = getJsonLogicInstance()
  const value = { value: originalValue }
  return jsl.apply(mapped_value as RulesLogic, value) as number
}
