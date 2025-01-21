import { SfaWeaponCategories, SfaWeaponTypes,  } from "enums/spirit-force-arena";
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
  max_melee_basic_boost: number;
  max_melee_long_range_boost: number;
  max_melee_high_rate_boost: number;
  max_melee_pierce_boost: number;
  max_ranged_basic_boost: number;
  max_ranged_fall_off_boost: number;
  max_ranged_magical_boost: number;
  max_ranged_sniper_boost: number;
  max_basic_grenade_boost: number;
  max_impact_grenade_boost: number;
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
  min_melee_basic_boost: number;
  min_melee_long_range_boost: number;
  min_melee_high_rate_boost: number;
  min_melee_pierce_boost: number;
  min_ranged_basic_boost: number;
  min_ranged_fall_off_boost: number;
  min_ranged_magical_boost: number;
  min_ranged_sniper_boost: number;
  min_basic_grenade_boost: number;
  min_impact_grenade_boost: number;
};

export type SfaTraits = {
  hp: number;
  ap: number;
  hp_regen: number;
  ap_regen: number;
  melee_damage: number;
  ranged_damage: number;
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
  class: string;
  traits: SpiritForceArenaGotchiTraits;
  rightHand: SpiritForceArenaWeapon | null;
  leftHand: SpiritForceArenaWeapon | null;
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

export type SfaWearable = {
    id: string;
    name: string;
    rarity: number;
    gameTraitsModifiers: {
      [Property in keyof SpiritForceArenaGotchiTraits]?: RulesLogic | null
    };
}

export type SfaWeaponTraits = SfaMeleeWeaponTraits | SfaRangedWeaponTraits | SfaGrenadeWeaponTraits;

export type SpiritForceArenaWeapon = {
  id: string;
  name: string;
  rarity: number;
  disabled?: boolean;
  type: "melee_pierce" | "melee_long_range" | "melee_high_rate" | "melee_basic" | "ranged_basic" | "ranged_fall_off" | "ranged_magical" | "ranged_sniper" | "grenade_basic" | "grenade_impact";
  category: "melee" | "ranged" | "grenade"; 
  traits: SfaWeaponTraits;
};

