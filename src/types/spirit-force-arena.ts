import { SfaClasses,  } from "enums/spirit-force-arena";
import { RulesLogic } from "json-logic-js";

export type SfaMaxTraits = {
  max_hp: number;
  max_ap: number;
  max_ads_view: number;
  max_luck: number;
  max_stealth: number;
  max_critical_chance: number;
  max_hp_regen: number;
  max_ap_regen: number;
  max_active_damage_reduction: number;
  max_passive_damage_reduction: number;
  max_critical_damages_multiplier: number;
  max_movement_speed: number;
  max_evasion: number;
  max_damage_to_npc: number;
};

export type SfaMinTraits = {
  min_hp: number;
  min_ap: number;
  min_melee_damage: number;
  min_ranged_damage: number;
  min_ads_view: number;
  min_luck: number;
  min_stealth: number;
  min_critical_chance: number;
  min_hp_regen: number;
  min_ap_regen: number;
  min_active_damage_reduction: number;
  min_passive_damage_reduction: number;
  min_critical_damages_multiplier: number;
  min_movement_speed: number;
  min_evasion: number;
  min_damage_to_npc: number;
};

export type SfaTraits = {
  hp: number;
  ap: number;
  hp_regen: number;
  ap_regen: number;
  melee_damage: number;
  ranged_damage: number;
  melee_dps: number;
  ranged_dps: number;
  falloff: number;
  armor: number;
  blocking_strength: number;
  grenade_dmg: number | null;
  grenade_type: string | null;
  critical_damages_multiplier: number;
  critical_chance: number;
  ads_view: number;
  damage_to_npc: number | null;
  movement_speed: number;
  evasion: number | null;
  luck: number;
  stealth: number | null;
}

export type MappedTraits = {
  bNrg: number;
  bAgg: number;
  bSpk: number;
  bBrn: number;
  bEys: number;
  bEyc: number;
}

export type SpiritForceArenaGotchiTraits = SfaTraits & MappedTraits //& SfaMaxTraits & SfaMinTraits;

export type SpiritForceArenaGotchi = {
  id: string;
  className: SfaClasses;
  traits: SpiritForceArenaGotchiTraits;
  // We will map wearables using the same order as it is in the subgraph.
  wearables: SfaWearable[];
  meleeWeapon: SfaWearable | null;
  rangedWeapon: SfaWearable | null;
  grenadeWeapon: SfaWearable | null;
};

export type SfaMeleeWeaponTraits = {
  damage: number;
  attack_speed: number;
  armor_piercing: number;
  range_multiplier: number;
}

export type SfaRangedWeaponTraits = {
  damage: number;
  attack_speed: number;
  aim_fov: number;
  fall_off: number;
  max_dispersion: number;
  min_dispersion: number;
  dispersion_increase_per_shot: number;
  dispersion_decrease_rate: number;
  dispersion_ads: number;
  recoil_strength: number;
  recoil_decrease_rate: number;
}

export type SfaGrenadeWeaponTraits = {
  damage: number;
  radius_multiplier: number;
  can_bounce: boolean;
}

export interface SfaWearableTraitModifier {
  traitName: keyof SfaTraits;
  value: RulesLogic;
}

export interface SfaWearable {
  id: string;
  rarity: number;
  name: string;
  type: WeaponType | null;
  category: WeaponCategory | null; 
  attack_rate?: number;
  gameTraitsModifiers: SfaWearableTraitModifier;
}

export type SfaWeaponTraits = SfaMeleeWeaponTraits | SfaRangedWeaponTraits | SfaGrenadeWeaponTraits;

export type SpiritForceArenaWeapon = {
  id: string;
  name: string;
  rarity: number;
  disabled?: boolean;
  type: WeaponType;
  category: WeaponCategory; 
  traits: SfaWeaponTraits;
};

export const MELEE_WEAPON_TYPES = ["melee_pierce", "melee_long_range", "melee_high_rate", "melee_basic"]
export const RANGED_WEAPON_TYPES = ["ranged_basic", "ranged_fall_off", "ranged_magical", "ranged_sniper"]
export const GRENADE_WEAPON_TYPES = ["basic_grenade", "impact_grenade"]
export const SHIELD_WEAPON_TYPES = ["shield"]

export type MeleeWeaponTypes = typeof MELEE_WEAPON_TYPES[number];
export type RangedWeaponTypes = typeof RANGED_WEAPON_TYPES[number];
export type GrenadeWeaponTypes = typeof GRENADE_WEAPON_TYPES[number];
export type ShieldWeaponTypes = typeof SHIELD_WEAPON_TYPES[number];
export type WeaponType = MeleeWeaponTypes | RangedWeaponTypes | GrenadeWeaponTypes | ShieldWeaponTypes

export const WEAPON_CATEGORIES = ["melee", "ranged", "grenade", "shield"]
export type WeaponCategory = typeof WEAPON_CATEGORIES[number];