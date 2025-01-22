import {
  SfaMaxTraits,
  SfaMinTraits,
  SfaTraits,
  MappedTraits,
  SfaWearable,
} from "types/spirit-force-arena";
import * as g from "types/gotchi";
import min_traits from "../games/spirit-force-arena/traits/min_traits.json";
import max_traits from "../games/spirit-force-arena/traits/max_traits.json";
import apprentice from "../games/spirit-force-arena/classes/apprentice.json";
import common from "../games/spirit-force-arena/classes/common.json";
import uncommon from "../games/spirit-force-arena/classes/uncommon.json";
import rare from "../games/spirit-force-arena/classes/rare.json";
import legendary from "../games/spirit-force-arena/classes/legendary.json";
import mythical from "../games/spirit-force-arena/classes/mythical.json";
import godlike from "../games/spirit-force-arena/classes/godlike.json";
import mapped_value from "../games/spirit-force-arena/helpers/mapped_value.json";
import hp from "../games/spirit-force-arena/traits/hp.json";
import ap from "../games/spirit-force-arena/traits/ap.json";
import ads_view from "../games/spirit-force-arena/traits/ads_view.json";
import luck from "../games/spirit-force-arena/traits/luck.json";
import melee_damage from "../games/spirit-force-arena/traits/melee_damage.json";
import ranged_damage from "../games/spirit-force-arena/traits/ranged_damage.json";
import wearables from "../games/spirit-force-arena/wearables/wearables.json";
import { evaluateClass, evaluateTrait, getJsonLogicInstance } from "./helpers";
import { RulesLogic } from "json-logic-js";
import { SfaClasses } from "../enums/spirit-force-arena";

function getTraitsMinValues(): SfaMinTraits {
  return min_traits;
}

function getTraitsMaxValues(className: SfaClasses): SfaMaxTraits {
  if (max_traits[className]) {
    return max_traits[className];
  }
  return max_traits[SfaClasses.DIVINE];
}

export function createSpiritForceArenaGotchi(
  gotchi: g.Gotchi
): SpiritForceArenaGotchi {
  const spiritForceArenaGotchi = new SpiritForceArenaGotchi(gotchi);
  return spiritForceArenaGotchi;
}

export class SpiritForceArenaGotchi {
  id: string;
  className: SfaClasses;
  traits: SfaTraits;
  mappedTraits: MappedTraits;
  wearables: SfaWearable[];
  meleeWeapon: SfaWearable | null;
  rangedWeapon: SfaWearable | null;
  grenadeWeapon: SfaWearable | null;

  constructor(gotchi: g.Gotchi) {
    // First we calculate the class of the gotchi, based on BRS
    this.className = this.getGotchiClass(gotchi);
    this.id = gotchi.id;
    // We set up all traits to 0 or min value.
    this.traits = {
      hp: min_traits.min_hp,
      ap: min_traits.min_ap,
      hp_regen: min_traits.min_hp_regen,
      ap_regen: min_traits.min_ap_regen,
      melee_damage: min_traits.min_melee_damage,
      melee_dps: 0,
      ranged_damage: min_traits.min_ranged_damage,
      ranged_dps: 0,
      ads_view: min_traits.min_ads_view,
      luck: min_traits.min_luck,
      stealth: min_traits.min_stealth,
      critical_chance: min_traits.min_critical_chance,
      armor: min_traits.min_passive_damage_reduction,
      blocking_strength: min_traits.min_active_damage_reduction,
      grenade_dmg: 0,
      grenade_type: null,
      critical_damages_multiplier: min_traits.min_critical_damages_multiplier,
      movement_speed: 0,
      evasion: 0,
      falloff: 0,
      damage_to_npc: 0,
    };
    // Mapped traits are normalized versions of the original traits
    this.mappedTraits = {
      bNrg: mappedTrait(gotchi.traits.nrg),
      bAgg: mappedTrait(gotchi.traits.agg),
      bSpk: mappedTrait(gotchi.traits.spk),
      bBrn: mappedTrait(gotchi.traits.brn),
      bEys: mappedTrait(gotchi.traits.eys),
      bEyc: mappedTrait(gotchi.traits.eyc),
    };

    // For the game traits that uses mapped traits for calculation we apply the logic in the rules.
    this.traits.hp += evaluateTrait(this.mappedTraits, hp as RulesLogic);
    this.traits.ap += evaluateTrait(this.mappedTraits, ap as RulesLogic);
    this.traits.ads_view += evaluateTrait(
      this.mappedTraits,
      ads_view as RulesLogic
    );
    this.traits.luck += evaluateTrait(this.mappedTraits, luck as RulesLogic);
    this.traits.melee_damage += evaluateTrait(
      this.mappedTraits,
      melee_damage as RulesLogic
    );
    this.traits.ranged_damage += evaluateTrait(
      this.mappedTraits,
      ranged_damage as RulesLogic
    );

    // Now we need to handle all wearable modifiers, especially weapons
    // First we get all the wearables from the gotchi and set uop our wearable property.
    this.wearables = gotchi.wearables.map(
      (id) =>
        wearables.find(
          (wearable) => wearable.id === id.toString()
        ) as SfaWearable
    );

    // This function will make sure both hands got a wearable using default ones if needed.
    this.handleHandsWearables();
    // Now we are sure both hands got something we will assign the best weapon of each category.
    this.meleeWeapon = this.getMeleeWeapon();
    this.rangedWeapon = this.getRangedWeapon();
    this.grenadeWeapon = this.getGrenadeWeapon();

    // Now we apply the wearable modifiers to the game traits.
    console.log(this.traits.melee_damage);
    console.log(this.traits.ranged_damage);
    this.applyWearableModifiersToGameTraits();

    // Finally we compute the min and max traits based on the game traits.  
    this.computeMinMaxTraits();
  }

  protected applyWearableModifiersToGameTraits() {
    if (this.wearables[g.body] && this.wearables[g.body].gameTraitsModifiers) {
      this.applyWearableTrait(this.wearables[g.body]);
    }

    if (this.wearables[g.head] && this.wearables[g.head].gameTraitsModifiers) {
      this.applyWearableTrait(this.wearables[g.head]);
    }

    if (this.wearables[g.eyes] && this.wearables[g.eyes].gameTraitsModifiers) {
      this.applyWearableTrait(this.wearables[g.eyes]);
    }

    if (this.wearables[g.face] && this.wearables[g.face].gameTraitsModifiers) {
      this.applyWearableTrait(this.wearables[g.face]);
    }
    if (this.wearables[g.pet] && this.wearables[g.pet].gameTraitsModifiers) {
      this.applyWearableTrait(this.wearables[g.pet]);
    }

    if (this.rangedWeapon && this.rangedWeapon.attack_rate) {
      this.applyWearableTrait(this.rangedWeapon);
      this.traits.ranged_dps = Math.round(this.rangedWeapon.attack_rate * this.traits.ranged_damage * 10) / 10;
    }
    if (this.meleeWeapon && this.meleeWeapon.attack_rate) {
      this.applyWearableTrait(this.meleeWeapon);
      this.traits.melee_dps = Math.round(this.meleeWeapon.attack_rate * this.traits.melee_damage * 10) / 10;
    }
    if (this.grenadeWeapon) {
      this.applyWearableTrait(this.grenadeWeapon);
    }
  }
  
  // TODO: This is a bit of a mess, we should refactor it.
  protected applyWearableTrait(wearable: SfaWearable) {  
    switch (wearable.gameTraitsModifiers.traitName) {
      case "hp":
        this.traits.hp = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "ap":
        this.traits.ap = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "hp_regen":
        this.traits.hp_regen = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "ap_regen":
        this.traits.ap_regen = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "melee_damage":
        this.traits.melee_damage = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "ranged_damage":
        this.traits.ranged_damage = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "falloff":
        this.traits.falloff = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "armor":
        this.traits.armor = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "blocking_strength":
        this.traits.blocking_strength = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "grenade_dmg":
        this.traits.grenade_dmg = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "critical_chance":
        this.traits.critical_chance = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "critical_damages_multiplier":
        this.traits.critical_damages_multiplier = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "ads_view":
        this.traits.ads_view = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "damage_to_npc":
        this.traits.damage_to_npc = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "movement_speed":
        this.traits.movement_speed = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "evasion":
        this.traits.evasion = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "luck":
        this.traits.luck = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
      case "stealth":
        this.traits.stealth = evaluateTrait(
          this.traits,
          wearable.gameTraitsModifiers.value
        ) as number;
        break;
    }
  }

  protected handleHandsWearables() {
    console.log(this.wearables);
    if (
      !this.wearables[g.righthand] &&
      !this.wearables[g.lefthand]
    ) {
      this.wearables[g.righthand] = createDefaultMeleeWeapon();
      this.wearables[g.lefthand] = createDefaultRangedWeapon();
    }

    // If only one hand is empty we put a weapon based on the category of the other hand.
    if (
      !this.wearables[g.righthand] &&
      this.wearables[g.lefthand]
    ) {
      this.wearables[g.righthand] = this.getDefaultWeapons(
        this.wearables[g.lefthand]
      );
    }
    if (
      !this.wearables[g.lefthand] &&
      this.wearables[g.righthand]
    ) {
      this.wearables[g.lefthand] = this.getDefaultWeapons(
        this.wearables[g.righthand]
      );
    }
    console.log(this.wearables);
  }

  // If one hand is empty we put a weapon based on the category of the other hand.protected function 
  protected getDefaultWeapons(otherWeapon: SfaWearable): SfaWearable {
    if (otherWeapon.category === "melee") {
      return createDefaultRangedWeapon();
    } else {
      return createDefaultMeleeWeapon();
    }
  }

  protected getMeleeWeapon(): SfaWearable | null {
    return this.getWeapon("melee");
  }

  protected getRangedWeapon(): SfaWearable | null {
    return this.getWeapon("ranged");
  }

  protected getGrenadeWeapon(): SfaWearable | null {
    return this.getWeapon("grenade");
  }

  protected getWeapon(
    category: "melee" | "ranged" | "grenade"
  ): SfaWearable | null {
    // https://www.notion.so/SFA-Weapons-Implementation-f9bfa9e9ad084d28ab5e81b0f086cfee?pvs=4#afaeecb04b6449d1a72f15e4c74d908c
    // Basically if you have 2 weapons of the same category only the best one is used.
    if (
      this.wearables[g.righthand]?.category === category &&
      this.wearables[g.lefthand]?.category !== category
    ) {
      return this.wearables[g.righthand];
    } else if (
      this.wearables[g.lefthand]?.category === category &&
      this.wearables[g.righthand]?.category !== category
    ) {
      return this.wearables[g.lefthand];
    } else if (
      this.wearables[g.righthand]?.category === category &&
      this.wearables[g.lefthand]?.category === category
    ) {
      const rightInt = convertWeaponTypeToNumber(
        this.wearables[g.righthand]?.type ?? ""
      );
      const leftInt = convertWeaponTypeToNumber(
        this.wearables[g.lefthand]?.type ?? ""
      );
      if (rightInt >= leftInt) {
        return this.wearables[g.righthand];
      } else {
        return this.wearables[g.lefthand];
      }
    }
    return null;
  }

  protected computeMinMaxTraits() {
    this.traits.hp = Math.round(this.getHp());
    this.traits.ap = Math.round(this.getAp());
    this.traits.hp_regen = Math.round(this.getHpRegen());
    this.traits.ap_regen = Math.round(this.getApRegen());
    this.traits.ads_view = Math.round(this.getAdsView());
    this.traits.luck = Math.round(this.getLuck() * 100) / 100;
    this.traits.stealth = Math.round(this.getStealth() * 100) / 100;
    this.traits.critical_chance = Math.round(this.getCriticalChance() * 100);
    this.traits.armor = Math.round(this.getPassiveDamageReduction() * 100);
    this.traits.blocking_strength = Math.round(this.getActiveDamageReduction() * 100);
    this.traits.critical_damages_multiplier = this.getCriticalDamagesMultiplier();
    this.traits.movement_speed = Math.round(this.getMovementSpeed() * 100);
    this.traits.evasion = this.getEvasion();
    this.traits.damage_to_npc = this.getDamageToNpc();
    this.traits.melee_damage = Math.round(this.getMeleeDamage() * 100) / 100;
    this.traits.ranged_damage = Math.round(this.getRangedDamage() * 100) / 100;
    this.traits.grenade_dmg = Math.round(this.getGrenadeDamage() * 100) / 100;
    this.traits.falloff = this.getFallOff();
  }

  getHp(): number {
    return this.getMinMaxValue(
      this.traits.hp,
      min_traits.min_hp,
      max_traits[this.className].max_hp
    );
  }

  getAp(): number {
    return this.getMinMaxValue(
      this.traits.ap,
      min_traits.min_ap,
      max_traits[this.className].max_ap
    );
  }

  getAdsView(): number {
    return this.getMinMaxValue(
      this.traits.ads_view,
      min_traits.min_ads_view,
      max_traits[this.className].max_ads_view
    );
  }

  // Based on traits value gisplayed ion game, the max cap is not applied currently.
  getLuck(): number {
    return this.getMinMaxValue(
      this.traits.luck,
      min_traits.min_luck,
      99999
    );
  }

  getStealth(): number {
    return this.getMinMaxValue(
      this.traits.stealth,
      min_traits.min_stealth,
      max_traits[this.className].max_stealth
    );
  }

  getCriticalChance(): number {
    return this.getMinMaxValue(
      this.traits.critical_chance,
      min_traits.min_critical_chance,
      max_traits[this.className].max_critical_chance
    );
  }

  getHpRegen(): number {
    return this.getMinMaxValue(
      this.traits.hp_regen,
      min_traits.min_hp_regen,
      max_traits[this.className].max_hp_regen
    );
  }

  getApRegen(): number {
    return this.getMinMaxValue(
      this.traits.ap_regen,
      min_traits.min_ap_regen,
      max_traits[this.className].max_ap_regen
    );
  }

  getActiveDamageReduction(): number {
    return this.getMinMaxValue(
      this.traits.blocking_strength,
      min_traits.min_active_damage_reduction,
      max_traits[this.className].max_active_damage_reduction
    );
  }

  getPassiveDamageReduction(): number {
    return this.getMinMaxValue(
      this.traits.armor,
      min_traits.min_passive_damage_reduction,
      max_traits[this.className].max_passive_damage_reduction
    );
  }

  getCriticalDamagesMultiplier(): number {
    return this.getMinMaxValue(
      this.traits.critical_damages_multiplier,
      min_traits.min_critical_damages_multiplier,
      max_traits[this.className].max_critical_damages_multiplier
    );
  }

  getMovementSpeed(): number {
    return this.getMinMaxValue(
      this.traits.movement_speed,
      min_traits.min_movement_speed,
      max_traits[this.className].max_movement_speed
    );
  }

  getEvasion(): number {
    return this.getMinMaxValue(
      this.traits.evasion,
      min_traits.min_evasion,
      max_traits[this.className].max_evasion
    );
  }

  getDamageToNpc(): number {
    return this.getMinMaxValue(
      this.traits.damage_to_npc,
      min_traits.min_damage_to_npc,
      max_traits[this.className].max_damage_to_npc
    );
  }

  getMeleeDamage(): number {
    return this.getMinMaxValue(
      this.traits.melee_damage,
      min_traits.min_melee_damage,
      99999
    );
  }

  getRangedDamage(): number {
    return this.getMinMaxValue(
      this.traits.ranged_damage,
      min_traits.min_ranged_damage,
      99999
    );
  }

  getGrenadeDamage(): number {
    return this.traits.grenade_dmg ?? 0;
  }

  // GSheet specified a lot of cases where it should be 0. But in-game value is always 1.
  getFallOff(): number {
    return 1;
  }

  protected getMinMaxValue(
    value: number | null,
    min: number,
    max: number
  ): number {
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

  protected getGotchiClass(gotchi: g.Gotchi): SfaClasses {
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
    return SfaClasses.DIVINE;
  }
 
}

function mappedTrait(originalValue: number) {
  const jsl = getJsonLogicInstance();
  const value = { value: originalValue };
  return jsl.apply(mapped_value as RulesLogic, value) as number;
}

function createDefaultMeleeWeapon(): SfaWearable {
  return {
    id: "9999",
    rarity: 0,
    name: "Default weapon",
    type: "melee_basic",
    category: "melee",
    attack_rate: 2,
    gameTraitsModifiers: {
      traitName: "melee_damage",
      value: { "+": [{ "*": [{ var: "melee_damage" }, 150] }, 150] },
    },
  };
}

function createDefaultRangedWeapon(): SfaWearable {
  return {
    id: "9998",
    rarity: 0,
    name: "Default weapon",
    type: "ranged_basic",
    category: "ranged",
    attack_rate: 3,
    gameTraitsModifiers: {
      traitName: "ranged_damage",
      value: { "+": [{ "*": [{ var: "ranged_damage" }, 66] }, 66] },
    },
  };
}

function convertWeaponTypeToNumber(type: string): number {
  switch (type) {
    case "melee_basic":
      return 0;
    case "melee_long_range":
      return 1;
    case "melee_pierce":
      return 2;
    case "melee_high_rate":
      return 3;
    case "ranged_basic":
      return 4;
    case "ranged_fall_off":
      return 5;
    case "ranged_magical":
      return 6;
    case "ranged_sniper":
      return 7;
    case "grenade_basic":
      return 8;
    case "grenade_impact":
      return 9;
    default:
      return 0;
  }
}
