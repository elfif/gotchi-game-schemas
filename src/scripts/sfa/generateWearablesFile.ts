import { parse } from "csv-parse/sync";
import * as fs from "fs";
import { RulesLogic } from "json-logic-js";
import { SfaTraits, SfaWearable, SpiritForceArenaGotchiTraits, WeaponCategory, WeaponType, MeleeWeaponTypes, RangedWeaponTypes, GrenadeWeaponTypes, ShieldWeaponTypes, MELEE_WEAPON_TYPES, RANGED_WEAPON_TYPES, GRENADE_WEAPON_TYPES, SHIELD_WEAPON_TYPES } from "types/spirit-force-arena";

const wearablesCsv = "./src/data/sfa/wearables_modifiers.csv";
const destFolder = "./src/games/spirit-force-arena/wearables/";

type SfaWearableCSV = {
  id: string,
  name: string,
  slot: string,
  type: string,
  stat: string,
  rarity: string,
  value: string,
}

function generateWearablesFile() {
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  // clear dest folder
  fs.readdirSync(destFolder).forEach((file) => {
    fs.unlinkSync(`${destFolder}${file}`);
  });

  // ########################################################
  // # Melee Weapons
  // ########################################################

  const csvFile = fs.readFileSync(wearablesCsv, "utf8");
  const csvData = parse(csvFile, { columns: true }) as Array<SfaWearableCSV>;

  const result: Array<SfaWearable> = []; 

  for (const csvWearable of csvData) {
    let gameTraitModifier: RulesLogic = {"+": [0,0]}
    let traitName: keyof SpiritForceArenaGotchiTraits
    let type: WeaponType | null = null
    let category: WeaponCategory | null = null
    const wearableType = csvWearable.type.toLowerCase().replace(" ", "_").replace("-", "_")

    if (isMeleeWeaponType(wearableType)) {
      type = wearableType as WeaponType
      category = "melee" as WeaponCategory
      const coeff = getBaseCoeffPerWeaponType(wearableType)
      const tmp = coeff + coeff * parseFloat(csvWearable.value)
      // https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
      // GO there if you are not aware of the EPSILON trick. 
      const roundedTmp = Math.round((tmp + Number.EPSILON) * 1000) / 1000
      traitName = "melee_damage" as keyof SpiritForceArenaGotchiTraits
      gameTraitModifier = {"+": [{"*": [{ var: "melee_damage" }, coeff]}, roundedTmp]}
    } else if (isRangedWeaponType(wearableType)) {
      type = wearableType as WeaponType
      category = "ranged" as WeaponCategory
      const coeff = getBaseCoeffPerWeaponType(wearableType)
      const tmp = coeff + coeff * parseFloat(csvWearable.value)
      const roundedTmp = Math.round((tmp + Number.EPSILON) * 1000) / 1000
      traitName = "ranged_damage" as keyof SpiritForceArenaGotchiTraits
      gameTraitModifier = {"+": [{"*": [{ var: "ranged_damage" }, coeff]}, roundedTmp]}
    } else if (isGrenadeWeaponType(wearableType)) {
      type = wearableType as WeaponType
      category = "grenade" as WeaponCategory
      const coeff = getBaseCoeffPerWeaponType(wearableType)
      const tmp = coeff + coeff * parseFloat(csvWearable.value)
      const roundedTmp = Math.round((tmp + Number.EPSILON) * 1000) / 1000
      traitName = "grenade_dmg" as keyof SpiritForceArenaGotchiTraits
      gameTraitModifier = {"+": [{"*": [{ var: "grenade_dmg" }, coeff]}, roundedTmp]}
    } else if (isShieldWeaponType(wearableType)) {
      traitName = getTraitNameFromCsvStat(csvWearable.stat);
      type = wearableType as WeaponType
      category = "shield" as WeaponCategory
      gameTraitModifier = {"+": [{ var: traitName }, csvWearable.value]}
    } else {
      traitName = getTraitNameFromCsvStat(csvWearable.stat);
      gameTraitModifier = {"+": [{ var: traitName }, csvWearable.value]}
    }
    

    const wearable: SfaWearable = {
      id: csvWearable.id,
      name: csvWearable.name,
      rarity: convertRarityFromCSV(csvWearable.rarity),
      type: type,
      category: category,
      attack_rate: getAttackRateByType(wearableType),
      gameTraitsModifiers: {
        traitName: traitName as keyof SfaTraits,
        value: gameTraitModifier
      },
    }
    result.push(wearable);
  }

  fs.writeFileSync(`${destFolder}wearables.json`, JSON.stringify(result, replacer));
}

function getAttackRateByType(type: string): number {
  switch (type) {
    case "melee_basic":
      return 2
    case "melee_long_range":
      return 1
    case "melee_high_rate":
      return 4
    case "melee_pierce":
      return 3
    case "ranged_basic":
      return 3
    case "ranged_fall_off":
      return 2
    case "ranged_magical":
      return 5
    case "ranged_sniper":
      return 1
    default:
      return 1
  }
}

function getTraitNameFromCsvStat(stat: string): keyof SpiritForceArenaGotchiTraits {
  switch (stat) {
    case "Active Damage Reduction":
      return 'blocking_strength'
    case "Passive Damage Reduction":
      return "armor";
    case "HP Capacity":
      return "hp";
    case "AP Capacity":
      return "ap";
    case "HP Regen":
      return "hp_regen";
    case "AP Regen":
      return "ap_regen";
    case "Evasion":
      return "evasion";
    case "Critical Damages Multiplier":
      return "critical_damages_multiplier";
    case "Movement Speed":
      return "movement_speed";
    case "Luck":
      return "luck";
    case "Critical Chance":
      return "critical_chance";
    case "ADS View":
      return "ads_view";
    case "Stealth":
      return "stealth";
    case "Damage to NPC":
      return "damage_to_npc";
    default:
      console.log(stat);
      throw new Error(`Unknown trait: ${stat}`);
  }
}

function convertRarityFromCSV(rarity: string): number {
  switch (rarity) {
    case "Common":
      return 1;
    case "Uncommon":
      return 2;
    case "Rare":
      return 3;
    case "Legendary":
      return 4;
    case "Mythical":
      return 5;
    case "Godlike":
      return 6;
    default:
      throw new Error(`Unknown rarity: ${rarity}`);
  }
}

function getBaseCoeffPerWeaponType(weaponType: string): number {
  switch (weaponType) {
    case "melee_basic":
      return 150
    case "melee_long_range":
      return 200
    case "melee_high_rate":
      return 90
    case "melee_pierce":
      return 115
    case "ranged_basic":
      return 66
    case "ranged_fall_off":
      return 133
    case "ranged_magical":
      return 55
    case "ranged_sniper":
      return 200
    case "basic_grenade":
      return 200
    case "impact_grenade":
      return 150
    default:
      return 0
  }
}

// Replacer function to keep only non null values in the final json.
// This reduces size drastically.
function replacer(key: string, value: any) {
  // Filtering out properties
  if (value === null) {
    return undefined;
  }
  return value;
}

function isMeleeWeaponType(type: string): type is MeleeWeaponTypes {
  return MELEE_WEAPON_TYPES.includes(type as MeleeWeaponTypes)
}

function isRangedWeaponType(type: string): type is RangedWeaponTypes {
  return RANGED_WEAPON_TYPES.includes(type as RangedWeaponTypes)
}

function isGrenadeWeaponType(type: string): type is GrenadeWeaponTypes {
  return GRENADE_WEAPON_TYPES.includes(type as GrenadeWeaponTypes)
}

function isShieldWeaponType(type: string): type is ShieldWeaponTypes {
  return SHIELD_WEAPON_TYPES.includes(type as ShieldWeaponTypes)
}

generateWearablesFile();