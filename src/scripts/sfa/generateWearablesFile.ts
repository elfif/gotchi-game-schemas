import { wearable, wearablesData } from "../../data/wearables.subgraph";
import { parse } from "csv-parse/sync";
import * as fs from "fs";
import { RulesLogic } from "json-logic-js";
import { SfaWearable, SpiritForceArenaGotchiTraits, SpiritForceArenaWeapon } from "types/spirit-force-arena";

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
  const typesToDiscard = ["melee_pierce", "melee_long_range", "melee_high_rate", "melee_basic", "ranged_basic", "ranged_fall_off", "ranged_magical", "ranged_sniper", "basic_grenade", "impact_grenade"]

  for (const csvWearable of csvData) {
    // We discard all weapons as their additional traits are not implemented in-game apparently.
    if (typesToDiscard.includes(csvWearable.type.toLowerCase().replace(" ", "_").replace("-", "_"))) {
      continue;
    }

    const traitName = getTraitNameFromCsvStat(csvWearable.stat);

    const wearable: SfaWearable = {
      id: csvWearable.id,
      name: csvWearable.name,
      rarity: convertRarityFromCSV(csvWearable.rarity),
      gameTraitsModifiers: {
        [traitName]: {"+": [{ var: traitName }, csvWearable.value]}
      },
    }
    result.push(wearable);
  }

  fs.writeFileSync(`${destFolder}wearables.json`, JSON.stringify(result, replacer));
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

// Replacer function to keep only non null values in the final json.
// This reduces size drastically.
function replacer(key: string, value: any) {
  // Filtering out properties
  if (value === null) {
    return undefined;
  }
  return value;
}

generateWearablesFile();