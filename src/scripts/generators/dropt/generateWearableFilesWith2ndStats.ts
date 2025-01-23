import * as fs from "fs";
import { RulesLogic } from "json-logic-js";
import { wearable, wearablesData } from "../../../data/wearables.subgraph";
import { DroptWearable, DroptWearableTrait, WearableType } from "../../../types/dropt";
import { parse } from "csv-parse/sync";

const secTraitsCSV = "./src/data/dropt/wearables_2ndstats.csv";
const destFolder = "./src/games/dropt/wearables/";
const meleeIds = [
  296, 89, 83, 106, 70, 311, 107, 315, 26, 148, 379, 257, 360, 100, 369, 69,
  223, 201, 99, 386,
];
const rangedIds = [
  225, 294, 299, 229, 58, 357, 3, 130, 6, 64, 65, 103, 217, 51, 17, 364,
];
const shields = [20, 36, 76, 254, 41, 23, 304, 79, 47, 93, 312];

type SecTraitsCSV = {
  id: string;
  stat1: string;
  stat2: string;
};

function generateWearableFiles() {
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  // clear dest folder
  fs.readdirSync(destFolder).forEach((file) => {
    fs.unlinkSync(`${destFolder}${file}`);
  });

  const csvFile = fs.readFileSync(secTraitsCSV, "utf8");
  const csvData = parse(csvFile, { columns: true }) as Array<SecTraitsCSV>;

  const result: Array<DroptWearable> = [];
  const resultTrait: Array<DroptWearableTrait> = [];
  for (const wearable of wearablesData) {
    let data: DroptWearable = createEmptyDroptWearable();
    let dataTrait: DroptWearableTrait = createEmptyDroptWearableTrait();
    data.type = getHandWearableType(wearable);
    data.id = parseInt(wearable.id);
    data.rarityScoreModifier = wearable.rarityScoreModifier;
    dataTrait.type = getHandWearableType(wearable);
    dataTrait.id = parseInt(wearable.id);
    dataTrait.rarityScoreModifier = wearable.rarityScoreModifier;
    ({data, dataTrait} = generateSecTraitsLogicFromCSV(wearable, data, dataTrait, csvData));
    result.push(data);
    resultTrait.push(dataTrait);
  }
  fs.writeFileSync(`${destFolder}wearables.json`, JSON.stringify(result, replacer));

  fs.writeFileSync(`${destFolder}wearables_trait.ts`, `import { DroptWearableTrait } from "types/dropt";\n\nexport const wearablesTrait: Array<DroptWearableTrait> = ${JSON.stringify(resultTrait, replacer)}`);
}

function getHandWearableType(
  wearable: wearable
): WearableType {
  if (meleeIds.includes(parseInt(wearable.id))) return "melee";
  if (rangedIds.includes(parseInt(wearable.id))) return "ranged";
  if (shields.includes(parseInt(wearable.id))) return "shield";
  return null;
}

function generateModifierLogic(
  wearable: wearable,
  data: DroptWearable,
  dataTrait: DroptWearableTrait
): DroptWearable {
  for (const [index, traitModifier] of wearable.traitModifiers.entries()) {
    if (traitModifier !== 0) {
      switch (index) {
        case 0: // nrg
          let rule, rawValue;
          ({ rule, rawValue } = generateHpLogic(traitModifier, wearable.rarityScoreModifier));  
          data.gameTraitsModifiers.hp = rule;
          dataTrait.gameTraitsModifiers.hp = rawValue;
          break;
        case 1: // agg
          ({ rule, rawValue } = generateAttackLogic(traitModifier, wearable.rarityScoreModifier));
          data.gameTraitsModifiers.attack = rule;
          dataTrait.gameTraitsModifiers.attack = rawValue;
          break;
        case 2: // spk
          ({ rule, rawValue } = generateCritLogic(traitModifier, wearable.rarityScoreModifier));
          data.gameTraitsModifiers.critPercent = rule;
          dataTrait.gameTraitsModifiers.critPercent = rawValue;
          break;
        case 3: // brn
          ({ rule, rawValue } = generateApLogic(traitModifier, wearable.rarityScoreModifier));
          data.gameTraitsModifiers.ap = rule;
          dataTrait.gameTraitsModifiers.ap = rawValue;
          break;
      }
    }
  }
  return data;
}

function generateHpLogic(traitModifier: number, rarityScoreModifier: number): {rule: RulesLogic, rawValue: number} {
  switch (rarityScoreModifier) {
    case 1:
      return { rule: { "+": [{ var: "hp" }, 25 * Math.abs(traitModifier)] }, rawValue: 25 * Math.abs(traitModifier) };
    case 2:
      return { rule: { "+": [{ var: "hp" }, 37.5 * Math.abs(traitModifier)] }, rawValue: 37.5 * Math.abs(traitModifier) };
    case 5:
      return { rule: { "+": [{ var: "hp" }, 50 * Math.abs(traitModifier)] }, rawValue: 50 * Math.abs(traitModifier) };
    case 10:
      return { rule: { "+": [{ var: "hp" }, 56 * Math.abs(traitModifier)] }, rawValue: 56 * Math.abs(traitModifier) };
    case 20:
      return { rule: { "+": [{ var: "hp" }, 60 * Math.abs(traitModifier)] }, rawValue: 60 * Math.abs(traitModifier) };
    case 50:
      return { rule: { "+": [{ var: "hp" }, 70 * Math.abs(traitModifier)] }, rawValue: 70 * Math.abs(traitModifier) };
    default:
      return { rule: null, rawValue: 0 };
  }
}

function generateAttackLogic(traitModifier: number, rarityScoreModifier: number): {rule: RulesLogic, rawValue: number} {
  switch (rarityScoreModifier) {
    case 1:
      return { rule: { "+": [{ var: "attack" }, 2.5 * Math.abs(traitModifier)] }, rawValue: 2.5 * Math.abs(traitModifier) };
    case 2:
      return { rule: { "+": [{ var: "attack" }, 3.75 * Math.abs(traitModifier)] }, rawValue: 3.75 * Math.abs(traitModifier) };
    case 5:
      return { rule: { "+": [{ var: "attack" }, 5 * Math.abs(traitModifier)] }, rawValue: 5 * Math.abs(traitModifier) };
    case 10:
      return { rule: { "+": [{ var: "attack" }, 5.5 * Math.abs(traitModifier)] }, rawValue: 5.5 * Math.abs(traitModifier) };
    case 20:
      return { rule: { "+": [{ var: "attack" }, 6 * Math.abs(traitModifier)] }, rawValue: 6 * Math.abs(traitModifier) };
    case 50:
      return { rule: { "+": [{ var: "attack" }, 6.67 * Math.abs(traitModifier)] }, rawValue: 6.67 * Math.abs(traitModifier) };
    default:
      return { rule: null, rawValue: 0 };
  }
}

function generateCritLogic(traitModifier: number, rarityScoreModifier: number): {rule: RulesLogic, rawValue: number} {
  switch (rarityScoreModifier) {
    case 1:
      return { rule: { "+": [{ var: "critPercent" }, 2 * Math.abs(traitModifier)] }, rawValue: 2 * Math.abs(traitModifier) };
    case 2:
      return { rule: { "+": [{ var: "critPercent" }, 1.5 * Math.abs(traitModifier)] }, rawValue: 1.5 * Math.abs(traitModifier) };
    case 5:
        return {  rule: { "+": [{ var: "critPercent" }, 1.7 * Math.abs(traitModifier)] }, rawValue: 1.7 * Math.abs(traitModifier) };
    case 10:
      return { rule: { "+": [{ var: "critPercent" }, 1.8 * Math.abs(traitModifier)] }, rawValue: 1.8 * Math.abs(traitModifier) };
    case 20:
      return { rule: { "+": [{ var: "critPercent" }, 2 * Math.abs(traitModifier)] }, rawValue: 2 * Math.abs(traitModifier) };
    case 50:
      return { rule: { "+": [{ var: "critPercent" }, 2.3 * Math.abs(traitModifier)] }, rawValue: 2.3 * Math.abs(traitModifier) };
    default:
      return { rule: null, rawValue: 0 };
  }
}

function generateApLogic(traitModifier: number, rarityScoreModifier: number): {rule: RulesLogic, rawValue: number} {
  switch (rarityScoreModifier) {
    case 1:
      return { rule: { "+": [{ var: "ap" }, 12.5 * Math.abs(traitModifier)] }, rawValue: 12.5 * Math.abs(traitModifier) };
    case 2:
      return { rule: { "+": [{ var: "ap" }, 18.75 * Math.abs(traitModifier)] }, rawValue: 18.75 * Math.abs(traitModifier) };
    case 5:
      return { rule: { "+": [{ var: "ap" }, 25 * Math.abs(traitModifier)] }, rawValue: 25 * Math.abs(traitModifier) };
    case 10:
      return { rule: { "+": [{ var: "ap" }, 28 * Math.abs(traitModifier)] }, rawValue: 28 * Math.abs(traitModifier) };
    case 20:
      return { rule: { "+": [{ var: "ap" }, 30 * Math.abs(traitModifier)] }, rawValue: 30 * Math.abs(traitModifier) };
    case 50:
      return { rule: { "+": [{ var: "ap" }, 35 * Math.abs(traitModifier)] }, rawValue: 35 * Math.abs(traitModifier) };
    default:
      return { rule: null, rawValue: 0 };
  }
}

function generateSecTraitsLogicFromCSV(
  wearable: wearable,
  data: DroptWearable,
  dataTrait: DroptWearableTrait,
  csvData: Array<SecTraitsCSV>
): {data: DroptWearable, dataTrait: DroptWearableTrait} {
  const wearableId = parseInt(wearable.id);
  const csvWearable = csvData.find((csv) => csv.id === wearableId.toString());
  if (csvWearable) {
    if (csvWearable.stat1) {
      // We need to split the string between the number and the property.
      const [number, property] = csvWearable.stat1.split(" ");
      const numberValue = parseFloat(number);
      // We need to transform the property name from PascalCase to camelCase
      const camelCaseProperty =
        property.charAt(0).toLowerCase() + property.slice(1);
      wearableId === 66 && console.log(camelCaseProperty);
      // We check if camelCaseProperty is a valid property in data.gameTraitsModifiers
      if (hasOwnProperty(data.gameTraitsModifiers, camelCaseProperty)) {
        data.gameTraitsModifiers[camelCaseProperty] = {
          "+": [{ var: camelCaseProperty }, numberValue],
        };
      }
      if (hasOwnProperty(dataTrait.gameTraitsModifiers, camelCaseProperty)) {
        dataTrait.gameTraitsModifiers[camelCaseProperty] = numberValue;
      }
    }

    if (csvWearable.stat2) {
      // We need to split the string between the number and the property.
      const [number, property] = csvWearable.stat2.split(" ");
      const numberValue = parseFloat(number);
      // We need to transform the property name from PascalCase to camelCase
      const camelCaseProperty =
        property.charAt(0).toLowerCase() + property.slice(1);
      // We check if camelCaseProperty is a valid property in data.gameTraitsModifiers
      if (hasOwnProperty(data.gameTraitsModifiers, camelCaseProperty)) {
        data.gameTraitsModifiers[camelCaseProperty] = {
          "+": [{ var: camelCaseProperty }, numberValue],
        };
      }
      if (hasOwnProperty(dataTrait.gameTraitsModifiers, camelCaseProperty)) {
        dataTrait.gameTraitsModifiers[camelCaseProperty] = numberValue;
      }
    }
  }
  return {data, dataTrait};
}

function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop);
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

function createEmptyDroptWearableTrait(): DroptWearableTrait {
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
