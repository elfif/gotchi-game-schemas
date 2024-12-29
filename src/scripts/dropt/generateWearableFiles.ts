import * as fs from "fs";
import { RulesLogic } from "json-logic-js";
import { wearable, wearablesData } from "../../data/wearables.subgraph";
import { DroptWearable, WearableType } from "../../types/dropt";

const destFolder = "./src/games/dropt/wearables/";
const meleeIds = [
  296, 89, 83, 106, 70, 311, 107, 315, 26, 148, 379, 257, 360, 100, 369, 69,
  223, 201, 99, 386,
];
const rangedIds = [
  225, 294, 299, 229, 58, 357, 3, 130, 6, 64, 65, 103, 217, 51, 17, 364,
];
const shields = [20, 36, 76, 254, 41, 23, 304, 79, 47, 93, 312];

function generateWearableFiles() {
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  // clear dest folder
  fs.readdirSync(destFolder).forEach((file) => {
    fs.unlinkSync(`${destFolder}${file}`);
  });

  const result: Array<DroptWearable> = [];

  for (const wearable of wearablesData) {
    const data: DroptWearable = createEmptyDroptWearable();
    data.type = getHandWearableType(wearable);
    data.id = parseInt(wearable.id);
    data.rarityScoreModifier = wearable.rarityScoreModifier;
    result.push(generateModifierLogic(wearable, data));
  }
  fs.writeFileSync(
    `${destFolder}wearables.json`,
    JSON.stringify(result, replacer)
  );
}

function getHandWearableType(wearable: wearable): WearableType {
  if (meleeIds.includes(parseInt(wearable.id))) return "melee";
  if (rangedIds.includes(parseInt(wearable.id))) return "ranged";
  if (shields.includes(parseInt(wearable.id))) return "shield";
  return null;
}

function generateModifierLogic(
  wearable: wearable,
  data: DroptWearable
): DroptWearable {
  for (const [index, traitModifier] of wearable.traitModifiers.entries()) {
    if (traitModifier !== 0) {
      switch (index) {
        case 0: // nrg
          data.gameTraitsModifiers.hp = generateHpLogic(
            traitModifier,
            wearable.rarityScoreModifier
          );
          break;
        case 1: // agg
          data.gameTraitsModifiers.attack = generateAttackLogic(
            traitModifier,
            wearable.rarityScoreModifier
          );
          break;
        case 2: // spk
          data.gameTraitsModifiers.critPercent = generateCritLogic(
            traitModifier,
            wearable.rarityScoreModifier
          );
          break;
        case 3: // brn
          data.gameTraitsModifiers.ap = generateApLogic(
            traitModifier,
            wearable.rarityScoreModifier
          );
          break;
      }
    }
  }
  return data;
}

function generateHpLogic(
  traitModifier: number,
  rarityScoreModifier: number
): RulesLogic {
  switch (rarityScoreModifier) {
    case 1:
      return { "+": [{ var: "hp" }, 25 * Math.abs(traitModifier)] };
    case 2:
      return { "+": [{ var: "hp" }, 37.5 * Math.abs(traitModifier)] };
    case 5:
      return { "+": [{ var: "hp" }, 50 * Math.abs(traitModifier)] };
    case 10:
      return { "+": [{ var: "hp" }, 56 * Math.abs(traitModifier)] };
    case 20:
      return { "+": [{ var: "hp" }, 60 * Math.abs(traitModifier)] };
    case 50:
      return { "+": [{ var: "hp" }, 70 * Math.abs(traitModifier)] };
    default:
      return null;
  }
}

function generateAttackLogic(
  traitModifier: number,
  rarityScoreModifier: number
): RulesLogic {
  switch (rarityScoreModifier) {
    case 1:
      return { "+": [{ var: "attack" }, 2.5 * Math.abs(traitModifier)] };
    case 2:
      return { "+": [{ var: "attack" }, 3.75 * Math.abs(traitModifier)] };
    case 5:
      return { "+": [{ var: "attack" }, 5 * Math.abs(traitModifier)] };
    case 10:
      return { "+": [{ var: "attack" }, 5.5 * Math.abs(traitModifier)] };
    case 20:
      return { "+": [{ var: "attack" }, 6 * Math.abs(traitModifier)] };
    case 50:
      return { "+": [{ var: "attack" }, 6.67 * Math.abs(traitModifier)] };
    default:
      return null;
  }
}

function generateCritLogic(
  traitModifier: number,
  rarityScoreModifier: number
): RulesLogic {
  switch (rarityScoreModifier) {
    case 1:
      return {
        "+": [{ var: "critPercent" }, 2 * Math.abs(traitModifier)],
      };
    case 2:
      return {
        "+": [{ var: "critPercent" }, 1.5 * Math.abs(traitModifier)],
      };
    case 5:
      return {
        "+": [{ var: "critPercent" }, 1.7 * Math.abs(traitModifier)],
      };
    case 10:
      return {
        "+": [{ var: "critPercent" }, 1.8 * Math.abs(traitModifier)],
      };
    case 20:
      return {
        "+": [{ var: "critPercent" }, 2 * Math.abs(traitModifier)],
      };
    case 50:
      return {
        "+": [{ var: "critPercent" }, 2.3 * Math.abs(traitModifier)],
      };
    default:
      return null;
  }
}

function generateApLogic(
  traitModifier: number,
  rarityScoreModifier: number
): RulesLogic {
  switch (rarityScoreModifier) {
    case 1:
      return { "+": [{ var: "ap" }, 12.5 * Math.abs(traitModifier)] };
    case 2:
      return { "+": [{ var: "ap" }, 18.75 * Math.abs(traitModifier)] };
    case 5:
      return { "+": [{ var: "ap" }, 25 * Math.abs(traitModifier)] };
    case 10:
      return { "+": [{ var: "ap" }, 28 * Math.abs(traitModifier)] };
    case 20:
      return { "+": [{ var: "ap" }, 30 * Math.abs(traitModifier)] };
    case 50:
      return { "+": [{ var: "ap" }, 35 * Math.abs(traitModifier)] };
    default:
      return null;
  }
}

function createEmptyDroptWearable(): DroptWearable {
  return {
    gameTraitsModifiers: {
      //primary traits
      hp: null,
      attack: null,
      critPercent: null,
      ap: null,
      //secondary traits
      evasion: null,
      apRegen: null,
      rangedDamage: null,
      // Attack
      critDamageIncrease: null,
      specialEffect: null,
      debuffEffectiveness: null,
      specialCooldownReduction: null,
      piercing: null,
      specialCostReduction: null,
      increasedAttackRange: null,
      doubleStrikeChance: null,
      // Survivability
      armour: null,
      reduceMeleeDamage: null,
      reduceMagicalDamage: null,
      reduceElementalDamage: null,
      apLeech: null,
      hpLeech: null,
      essenceLeech: null,
      // Environment
      moveSpeed: null,
      magnetism: null,
      extraDash: null,
      purveying: null,
    },
    type: null,
    rarityScoreModifier: 0,
    id: 0,
    traitsModifiers: [],
  };
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

generateWearableFiles();
