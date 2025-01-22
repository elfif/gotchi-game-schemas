import { wearable, wearablesData } from "../../data/wearables.subgraph";
import { parse } from "csv-parse/sync";
import { SfaWeaponTypes } from "enums/spirit-force-arena";
import { SfaWeaponCategories } from "enums/spirit-force-arena";
import * as fs from "fs";
import { SfaMeleeWeaponTraits, SpiritForceArenaWeapon } from "types/spirit-force-arena";

const meleeCsv = "./src/data/sfa/melee_weapons.csv";
const rangedCsv = "./src/data/sfa/ranged_weapons.csv";
const grenadeCsv = "./src/data/sfa/grenade_weapons.csv";
const destFolder = "./src/games/spirit-force-arena/wearables/";
const jsonDest = 'weapons.json';
const tsDest = 'weapons.ts';

type SfaMeleeWeaponTraitsCSV = {
  name: string;
  type: string;
  rarity: string;
  damage: string;
  armor_piercing: string;
  attack_speed: string;
  range_multiplier: string;
};

type SfaRangedWeaponTraitsCSV = {
  name: string;
  type: string;
  rarity: string;
  damage: string;
  attack_speed: string;
  aim_fov: string;
  fall_off: string;
  max_dispersion: string;
  min_dispersion: string;
  dispersion_increase_per_shot: string;
  dispersion_decrease_rate: string;
  dispersion_ads: string;
  recoil_strength: string;
  recoil_decrease_rate: string;
};

type SfaGrenadeWeaponTraitsCSV = {
  name: string;
  type: string;
  rarity: string;
  damage: string;
  radius_multiplier: string;
  can_bounce: string;
};

function generateWeaponsFile() {
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  // clear dest folder
  fs.readdirSync(destFolder).forEach((file) => {
    if (file === jsonDest || file === tsDest) {
      fs.unlinkSync(`${destFolder}${file}`); 
    }    
  });

  // ########################################################
  // # Melee Weapons
  // ########################################################

  const meleeCsvFile = fs.readFileSync(meleeCsv, "utf8");
  const meleeCsvData = parse(meleeCsvFile, { columns: true }) as Array<SfaMeleeWeaponTraitsCSV>;

  const result: Array<SpiritForceArenaWeapon> = [];

  for (const csvWeapon of meleeCsvData) {
    // Find the id in the subgraph data. 
    const weapon = wearablesData.find((w) => w.name === csvWeapon.name);
    if (!weapon) {
      console.error(`Weapon ${csvWeapon.name} not found in subgraph data`);
      continue;
    }
    
    const data: SpiritForceArenaWeapon = {
      id: weapon.id,
      name: weapon.name,
      rarity: convertRarityFromCSV(csvWeapon.rarity),
      category: SfaWeaponCategories.MELEE,
      type: convertMeleeTypesFromCSV(csvWeapon.type),
      traits: {
        damage: parseFloat(csvWeapon.damage),
        attack_speed: parseFloat(csvWeapon.attack_speed),
        armor_piercing: parseFloat(csvWeapon.armor_piercing),
        range_multiplier: parseFloat(csvWeapon.range_multiplier),
      },
    };
    result.push(data);
  }

  // ########################################################
  // # Ranged Weapons
  // ########################################################


  const rangedCsvFile = fs.readFileSync(rangedCsv, "utf8");
  const rangedCsvData = parse(rangedCsvFile, { columns: true }) as Array<SfaRangedWeaponTraitsCSV>;

  for (const csvWeapon of rangedCsvData) {
    // Find the id in the subgraph data. 
    const weapon = wearablesData.find((w) => w.name === csvWeapon.name);
    if (!weapon) {
      console.error(`Weapon ${csvWeapon.name} not found in subgraph data`);
      continue;
    }
    const data: SpiritForceArenaWeapon = {
      id: weapon.id,
      name: weapon.name,
      rarity: convertRarityFromCSV(csvWeapon.rarity),
      category: SfaWeaponCategories.RANGED,
      type: convertRangedTypesFromCSV(csvWeapon.type),
      traits: {
        damage: parseFloat(csvWeapon.damage),
        attack_speed: parseFloat(csvWeapon.attack_speed),
        aim_fov: parseFloat(csvWeapon.aim_fov),
        fall_off: parseFloat(csvWeapon.fall_off),
        max_dispersion: parseFloat(csvWeapon.max_dispersion),
        min_dispersion: parseFloat(csvWeapon.min_dispersion),
        dispersion_increase_per_shot: parseFloat(csvWeapon.dispersion_increase_per_shot),
        dispersion_decrease_rate: parseFloat(csvWeapon.dispersion_decrease_rate),
        dispersion_ads: parseFloat(csvWeapon.dispersion_ads),
        recoil_strength: parseFloat(csvWeapon.recoil_strength),
        recoil_decrease_rate: parseFloat(csvWeapon.recoil_decrease_rate),
      },
    };
    result.push(data);
  }

  // ########################################################
  // # Grenade Weapons
  // ########################################################

  const grenadeCsvFile = fs.readFileSync(grenadeCsv, "utf8");
  const grenadeCsvData = parse(grenadeCsvFile, { columns: true }) as Array<SfaGrenadeWeaponTraitsCSV>;

  for (const csvWeapon of grenadeCsvData) {
    // Find the id in the subgraph data. 
    const weapon = wearablesData.find((w) => w.name === csvWeapon.name);
    if (!weapon) {
      console.error(`Weapon ${csvWeapon.name} not found in subgraph data`);
      continue;
    }
    const data: SpiritForceArenaWeapon = {
      id: weapon.id,
      name: weapon.name,
      rarity: convertRarityFromCSV(csvWeapon.rarity),
      category: SfaWeaponCategories.GRENADE,
      type: convertGrenadeTypesFromCSV(csvWeapon.type),
      traits: {
        damage: parseFloat(csvWeapon.damage),
        radius_multiplier: parseFloat(csvWeapon.radius_multiplier),
        can_bounce: (csvWeapon.can_bounce === "TRUE"),
      },
    };
    result.push(data);
  }

  fs.writeFileSync(
    `${destFolder}weapons.ts`,
    `import { SpiritForceArenaWeapon } from "types/spirit-force-arena";\n\nexport const weapons: Array<SpiritForceArenaWeapon> = ${JSON.stringify(result, replacer)}`
  );

  fs.writeFileSync(
    `${destFolder}weapons.json`,
    JSON.stringify(result, replacer)
  );
}

function convertMeleeTypesFromCSV(type: string): SfaWeaponTypes {
  switch (type) {
    case "Melee Pierce":
      return SfaWeaponTypes.MELEE_PIERCE;
    case "Melee High-Rate":
      return SfaWeaponTypes.MELEE_HIGH_RATE;
    case "Melee Long-Range":
      return SfaWeaponTypes.MELEE_LONG_RANGE;
    case "Melee Basic":
      return SfaWeaponTypes.MELEE_BASIC;
    default:
      throw new Error(`Unknown melee weapon type: ${type}`);
  }
}

function convertRangedTypesFromCSV(type: string): SfaWeaponTypes {
  switch (type) {
    case "Ranged Basic":
      return SfaWeaponTypes.RANGED_BASIC;
    case "Ranged Fall-off":
      return SfaWeaponTypes.RANGED_FALL_OFF;
    case "Ranged Magical":
      return SfaWeaponTypes.RANGED_MAGICAL;
    case "Ranged Sniper":
      return SfaWeaponTypes.RANGED_SNIPER;
    default:
      throw new Error(`Unknown ranged weapon type: ${type}`);
  }
}

function convertGrenadeTypesFromCSV(type: string): SfaWeaponTypes {
  switch (type) {
    case "Impact Grenade":
      return SfaWeaponTypes.GRENADE_IMPACT;
    case "Basic Grenade":
      return SfaWeaponTypes.GRENADE_BASIC;
    default:
      throw new Error(`Unknown grenade weapon type: ${type}`);
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

// Replacer function to keep only non null values in the final json.
// This reduces size drastically.
function replacer(key: string, value: any) {
  // Filtering out properties
  if (value === null) {
    return undefined;
  }
  return value;
}

generateWeaponsFile();