// import { SpiritForceArenaGotchi } from "types/spirit-force-arena";
// import { Gotchi } from "types/gotchi";
// import { SfaClasses, SfaWeaponTypes } from "enums/spirit-force-arena";

// const LeftHandSlotIndex = 4;
// const RightHandSlotIndex = 5;

// export function createSpiritForceArenaGotchi(gotchi: Gotchi): SpiritForceArenaGotchi {
//   // switch(gotchi.id) {
  //   case "11008": 
  //     return get11008(gotchi);
  //   case "2935":
  //     return get2935(gotchi);
  //   default:  
  //     return get2935(gotchi);
  // }
}

// function get11008(gotchi: Gotchi): SpiritForceArenaGotchi {

//   const leftHand = gotchi.wearables[LeftHandSlotIndex];
//   const rightHand = gotchi.wearables[RightHandSlotIndex];

//   return {
//     id: gotchi.id,
//     class: SfaClasses.MYTHICAL,
//     traits: {
//       hp: 3450,
//       ap: 314,
//       hp_regen: 13,
//       ap_regen: 5,
//       melee_damage: 366,
//       ranged_damage: 233,
//       falloff: 1,
//       armor: 20,
//       blocking_strength: 22,
//       grenade_dmg: 0,
//       grenade_type: null,
//       critical_damages_multiplier: 2,
//       critical_chance: 10,
//       ads_view: 10,
//       damage_to_npc: null,
//       movement_speed: 0,
//       evasion: null,
//       luck: 0.33,
//       stealth: null,
//     },
//     rightHand: {
//       id: 65,
//       name: "Legendary Wizard Staff",
//       type: SfaWeaponTypes.RANGED
//     },
//     leftHand: {
//       id: 201,
//       name: "Mechanical claw",
//       type: SfaWeaponTypes.MELEE
//     }
//   }
// }

// function get2935(gotchi: Gotchi): SpiritForceArenaGotchi {

//   const leftHand = gotchi.wearables[LeftHandSlotIndex];
//   const rightHand = gotchi.wearables[RightHandSlotIndex];

//   return {
//     id: gotchi.id,
//     class: SfaClasses.LEGENDARY,
//     traits: {
//       hp: 3900,
//       ap: 196,
//       hp_regen: 10,
//       ap_regen: 7,
//       melee_damage: 211.5,
//       ranged_damage: 99.7,
//       falloff: 1,
//       armor: 50,
//       blocking_strength: 10,
//       grenade_dmg: 250.1,
//       grenade_type: "impact",
//       critical_damages_multiplier: 2,
//       critical_chance: 10,
//       ads_view: 10,
//       damage_to_npc: null,
//       movement_speed: 50.06,
//       evasion: null,
//       luck: 0.49,
//       stealth: null,
//     },
//     rightHand: {
//       id: 225,
//       name: "BasketBall",
//       type: SfaWeaponTypes.RANGED
//     },
//     leftHand: null
//   }
// }

import { SfaMaxTraits, SfaMinTraits, SfaTraits, MappedTraits, SpiritForceArenaWeapon, SfaWearable } from "types/spirit-force-arena";
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
import ads_view from "../games/spirit-force-arena/traits/ads_view.json"
import luck from "../games/spirit-force-arena/traits/luck.json"
import wearables from "../games/spirit-force-arena/wearables/wearables.json"
import weapons from "../games/spirit-force-arena/wearables/weapons.json"
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
  meleeWeapon: SpiritForceArenaWeapon | null;
  rangedWeapon: SpiritForceArenaWeapon | null;
  grenadeWeapon: SpiritForceArenaWeapon | null;

  constructor(gotchi: Gotchi) {
    this.className = getGotchiClass(gotchi);
    this.traits = {
      hp: 0,
      ap: 0,
      hp_regen: 0,
      ap_regen: 0,
      melee_damage: 0,
      ranged_damage: 0,
      ads_view: 0,
      luck: 0,  
      stealth: 0,
      critical_chance: 0,
      armor: 0,
      blocking_strength: 0,
      grenade_dmg: 0,
      grenade_type: null,
      critical_damages_multiplier: 0,
      movement_speed: 0,
      evasion: 0,
      falloff: 0,
      damage_to_npc: 0,
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
    this.traits.ads_view = evaluateTrait(this.mappedTraits, ads_view as RulesLogic)
    this.traits.luck = evaluateTrait(this.mappedTraits, luck as RulesLogic)

    this.rightHand = null;
    this.leftHand = null;

    if (gotchi.wearables.length > 0) {
      if (gotchi.wearables[4] !== 0) {
        const weapon = weapons.find(weapon => weapon.id === gotchi.wearables[4].toString()) as SpiritForceArenaWeapon;
        if (weapon) {
          this.rightHand = weapon;
        }
      }
      if (gotchi.wearables[5] !== 0) {
        const weapon = weapons.find(weapon => weapon.id === gotchi.wearables[5].toString()) as SpiritForceArenaWeapon;
        if (weapon) {
          this.leftHand = weapon;
        }
      }
    }

    // If both hands are ampty we put a melee on the right and a ranged on the left 
    if (this.rightHand === null && this.leftHand === null) {
      this.rightHand = createDefaultMeleeWeapon();
      this.leftHand = createDefaultRangedWeapon();
    }

    // If only one hand is empty we put a weapon based on the category of the other hand.
    if (this.rightHand === null && this.leftHand !== null) {
      this.rightHand = this.getDefaultWeapons(this.leftHand);
    }
    if (this.leftHand === null && this.rightHand !== null) {
      this.leftHand = this.getDefaultWeapons(this.rightHand);
    }

    // Now we are sure both hands got something we will assign the best weapon of each category.
    this.meleeWeapon = this.getMeleeWeapon();
    this.rangedWeapon = this.getRangedWeapon();
    this.grenadeWeapon = this.getGrenadeWeapon();

    // And now we can compute damage....
    //this.traits.melee_damage = 
  }

  protected getDefaultWeapons(otherWeapon: SpiritForceArenaWeapon): SpiritForceArenaWeapon {
    if (otherWeapon.category === 'melee') {
      return createDefaultRangedWeapon();
    } else {
      return createDefaultMeleeWeapon();
    }
  }

  protected getMeleeWeapon(): SpiritForceArenaWeapon | null {
    return this.getWeapon('melee');
  }

  protected getRangedWeapon(): SpiritForceArenaWeapon | null {
    return this.getWeapon('ranged');
  }

  protected getGrenadeWeapon(): SpiritForceArenaWeapon | null {
    return this.getWeapon('grenade');
  }

  protected getWeapon(category: 'melee' | 'ranged' | 'grenade'): SpiritForceArenaWeapon | null {
    // https://www.notion.so/SFA-Weapons-Implementation-f9bfa9e9ad084d28ab5e81b0f086cfee?pvs=4#afaeecb04b6449d1a72f15e4c74d908c
    // Basically if you have 2 weapons of the same category only the best one is used.
    if (this.rightHand?.category === category && this.leftHand?.category !== category) {
      return this.rightHand;
    } else if (this.leftHand?.category === category && this.rightHand?.category !== category) {
      return this.leftHand;
    } else if (this.rightHand?.category === category && this.leftHand?.category === category) {
      const rightInt = convertWeaponTypeToNumber(this.rightHand.type);
      const leftInt = convertWeaponTypeToNumber(this.leftHand.type);
      if (rightInt >= leftInt) {
        return this.rightHand;
      } else {
        return this.leftHand;
      }
    }
    return null;
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
    return this.getMinMaxValue(this.traits.blocking_strength, this.traits.min_active_damage_reduction, this.traits.max_active_damage_reduction);
  }

  getPassiveDamageReduction(): number {
    return this.getMinMaxValue(this.traits.armor, this.traits.min_passive_damage_reduction, this.traits.max_passive_damage_reduction);
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

  // getMeleeBasicBoost(): number {
  //   return this.getMinMaxValue(this.traits.melee_basic_boost, this.traits.min_melee_basic_boost, this.traits.max_melee_basic_boost);
  // }

  // getMeleeLongRangeBoost(): number {
  //   return this.getMinMaxValue(this.traits.melee_long_range_boost, this.traits.min_melee_long_range_boost, this.traits.max_melee_long_range_boost);
  // }

  // getMeleeHighRateBoost(): number {
  //   return this.getMinMaxValue(this.traits.melee_high_rate_boost, this.traits.min_melee_high_rate_boost, this.traits.max_melee_high_rate_boost);
  // }

  // getMeleePierceBoost(): number {
  //   return this.getMinMaxValue(this.traits.melee_pierce_boost, this.traits.min_melee_pierce_boost, this.traits.max_melee_pierce_boost);
  // }

  // getRangedBasicBoost(): number {
  //   return this.getMinMaxValue(this.traits.ranged_basic_boost, this.traits.min_ranged_basic_boost, this.traits.max_ranged_basic_boost);
  // }

  // getRangedFallOffBoost(): number {
  //   return this.getMinMaxValue(this.traits.ranged_fall_off_boost, this.traits.min_ranged_fall_off_boost, this.traits.max_ranged_fall_off_boost);
  // }

  // getRangedMagicalBoost(): number {
  //   return this.getMinMaxValue(this.traits.ranged_magical_boost, this.traits.min_ranged_magical_boost, this.traits.max_ranged_magical_boost);
  // }

  // getRangedSniperBoost(): number {
  //   return this.getMinMaxValue(this.traits.ranged_sniper_boost, this.traits.min_ranged_sniper_boost, this.traits.max_ranged_sniper_boost);
  // }

  // getBasicGrenadeBoost(): number {
  //   return this.getMinMaxValue(this.traits.basic_grenade_boost, this.traits.min_basic_grenade_boost, this.traits.max_basic_grenade_boost);
  // }

  // getImpactGrenadeBoost(): number {
  //   return this.getMinMaxValue(this.traits.impact_grenade_boost, this.traits.min_impact_grenade_boost, this.traits.max_impact_grenade_boost);
  // }

  protected getMinMaxValue(value: number | null, min: number, max: number): number {
    if (value === null) {
      return min;
    }
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

function createDefaultMeleeWeapon(): SpiritForceArenaWeapon {
  return {
    id: "0",
    rarity: 0,
    name: "Default weapon",
    type: 'melee_basic',
    category: 'melee',
    traits: {
      damage: 150,
      attack_speed: 2,
      armor_piercing: 1,
      range_multiplier: 1,
    }
  }
}

function createDefaultRangedWeapon(): SpiritForceArenaWeapon {
  return {
    id: "0",
    rarity: 0,
    name: "Default weapon",
    type: 'ranged_basic',
    category: 'ranged',
    traits: {
      damage: 66,
      attack_speed: 3,
      aim_fov: 30,
      fall_off: 0,
      max_dispersion: 20,
      min_dispersion: 0.4,
      dispersion_increase_per_shot: 1,
      dispersion_decrease_rate: 4,
      dispersion_ads: 2,
      recoil_strength: 50,
      recoil_decrease_rate: 2
    }
  }
}

function convertWeaponTypeToNumber(type: string): number {
  switch(type) {
    case 'melee_basic':
      return 0;
    case 'melee_long_range':
      return 1;
    case 'melee_pierce':
      return 2;
    case 'melee_high_rate':
      return 3;
    case 'ranged_basic':
      return 4;
    case 'ranged_fall_off':
      return 5;
    case 'ranged_magical':
      return 6;
    case 'ranged_sniper':
      return 7;
    case 'grenade_basic':
      return 8;
    case 'grenade_impact':
      return 9;
    default:
      return 0;
  }
}