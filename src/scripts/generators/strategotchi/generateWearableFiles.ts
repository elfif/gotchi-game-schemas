import * as fs from "fs";
import { RulesLogic } from "json-logic-js";
import { wearable, wearablesData } from "../../../data/wearables.subgraph";
import { StrategotchiWearable, StrategotchiWearableType } from "types/strategotchi";
import { createEmptyStrategotchiWearable } from "lib/strategotchi";

const destFolder = "./src/games/strategotchi/wearables/";
const meleeIds = [
  69, 223, 296, 83, 148, 379, 26, 879, 106, 360, 201, 70, 311, 107, 89
];
const rangedIds = [
  64, 229, 58, 357, 65, 103, 217, 99, 
];
const lobIds = [
  225, 130, 294, 299, 3, 6, 
];
const omnbiTargetingIds = [
  51, 17
];
const aoeIds = [
  369, 386
]

const allIds = [...meleeIds, ...rangedIds, ...lobIds, ...omnbiTargetingIds, ...aoeIds];


function generateWearableFiles() {
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  // clear dest folder
  fs.readdirSync(destFolder).forEach((file) => {
    fs.unlinkSync(`${destFolder}${file}`);
  });

  const result: Array<StrategotchiWearable> = [];

  wearablesData.filter(wearable => allIds.includes(parseInt(wearable.id))).forEach((wearable) => {
    const data: StrategotchiWearable = createEmptyStrategotchiWearable();
    data.type = getHandWearableType(wearable);
    data.id = parseInt(wearable.id);
    data.name = wearable.name;
    result.push(generateModifierLogic(wearable, data));
  });

  fs.writeFileSync(
    `${destFolder}wearables.ts`,
    `import { StrategotchiWearable } from "types/strategotchi";\n\nexport const wearables: Array<StrategotchiWearable> = ${JSON.stringify(result, replacer)}`
  );

  fs.writeFileSync(
    `${destFolder}wearables.json`,
    JSON.stringify(result, replacer)
  );
}

function getHandWearableType(wearable: wearable): StrategotchiWearableType {
  if (meleeIds.includes(parseInt(wearable.id))) return "melee";
  if (rangedIds.includes(parseInt(wearable.id))) return "ranged";
  if (lobIds.includes(parseInt(wearable.id))) return "lobbed";
  if (omnbiTargetingIds.includes(parseInt(wearable.id))) return "omni-targeting";
  return "aoe";
}

function generateModifierLogic(
  wearable: wearable,
  data: StrategotchiWearable
): StrategotchiWearable {
  
  data.damage = generateCritDmgLogic(
    wearable.traitModifiers[0],
    wearable.rarityScoreModifier,
    wearable.id
  );
  data.specialAbilities = generateSpecialAbility(wearable.id);

  return data;
}

function generateCritDmgLogic(
  traitModifier: number,
  rarityScoreModifier: number,
  id: string
): number {

  // Mudgen diamond exception, should be 20 as all godlike, but is 18 instead
  if (id === "51") {
    return 18;
  }

  // Staff of Creation exception, should be 20 as all godlike, but is 22 instead
  if (id === "369") {
    return 22;
  }

  switch (rarityScoreModifier) {
    case 1:
      return 10;
    case 2:
      return 12;
    case 5:
      return 14;
    case 10:
      return 16;
    case 20:
      return 18;
    case 50:
      return 20;
    default:
      return 0;
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

function generateSpecialAbility(id: string): Array<string> {
  switch(id) {
    case "103":
      return ["Damages target", "Switcheroo: Switches places with target"];
    case "106":
      return ["Damages target andpushes side-adjacent target"];
    case "107":
      return ["Damages all objects 3 tiles ahead", "Piercing: attack goes through objects"];
    case "130":
      return ["Damages target and pushes all adjacent tiles back"];
    case "17":
      return ["Damages target and all surrounding tiles", "Surrounding tiles receive random damage from 10-20"];
    case "201":
      return  [
        "Grabs the target and throws it behind you, dealing damage.", 
        "If an object occupies the space behind you, target and object receive collision damage. Target returns to start position"
      ]
    case "217":
      return ["Shoots a piercing lazer that damages all objects in its path. Each Consecutive target receives 2 less damage."]
    case "223":
      return ["Damages and pushes target to the left"]
    case "225":
      return ["Damages target and pushes all adjacent tiles back"]
    case "229":
      return ["Damages and pulls target toward you. If attacking an immovable object, player is pulled toward object"]
    case "294":
      return ["Damages and pushes the target back"]
    case "296":
      return ["Damages and pushes target.", "Does a follow up attack to the tile directly behind you"]
    case "299":
      return ["Damages 2 targets in line and pushes both"]
    case "3":
      return ["Damages target and pushes adjacent tiles"]
    case "311":
      return ["Damages and pushes target plus side-adjacent tiles", "Shields any adjacent friendlies"]
    case "360":
        return ["Damages target and pushes you and adjacent tiles away"];
    case "369":
      return ["Damages enemies in all surrounding tiles"];
    case "386":
      return ["Damages enemies in all surrounding tiles", "Heals any friendlies in range"];
    case "51":
      return ["Damages target and pushes adjacent tiles", "Chains attack through any adjacent units"];
    case "6": 
      return ["Damages target and pushes adjacent tiles."];
    case "65":
      return ["Damages and pushes target", "Heals adjacent friendlies"];
    case "69":
      return ["Damage and push the target back"];
    case "70": 
      return ["Damages and pushes target plus side-adjacent tiles"]
    case "89": 
      return ["Damages and pulls target", "Switches places with target"]
    case "99":
      return ["Damages and pushes target", "Sniper: the farther the target, the more damage is dealt (+2.5dmg per tile)"]       
    default:
      return ["Damages and pushes target"];
  }
}

generateWearableFiles();
