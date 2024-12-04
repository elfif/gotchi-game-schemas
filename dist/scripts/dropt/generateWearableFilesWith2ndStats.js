"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const wearables_subgraph_1 = require("@/data/wearables.subgraph");
const sync_1 = require("csv-parse/sync");
const secTraitsCSV = "./data/dropt/wearables_2ndstats.csv";
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
    const csvFile = fs.readFileSync(secTraitsCSV, "utf8");
    const csvData = (0, sync_1.parse)(csvFile, { columns: true });
    const result = [];
    for (const wearable of wearables_subgraph_1.wearablesData) {
        const data = createEmptyDroptWearable();
        data.type = getHandWearableType(wearable);
        data.id = parseInt(wearable.id);
        data.rarityScoreModifier = wearable.rarityScoreModifier;
        result.push(generateSecTraitsLogicFromCSV(wearable, generateModifierLogic(wearable, data), csvData));
    }
    fs.writeFileSync(`${destFolder}wearables.json`, JSON.stringify(result, replacer));
}
function getHandWearableType(wearable) {
    if (meleeIds.includes(parseInt(wearable.id)))
        return "melee";
    if (rangedIds.includes(parseInt(wearable.id)))
        return "ranged";
    if (shields.includes(parseInt(wearable.id)))
        return "shield";
    return null;
}
function generateModifierLogic(wearable, data) {
    for (const [index, traitModifier] of wearable.traitModifiers.entries()) {
        if (traitModifier !== 0) {
            switch (index) {
                case 0: // nrg
                    data.gameTraitsModifiers.hp = generateHpLogic(traitModifier, wearable.rarityScoreModifier);
                    break;
                case 1: // agg
                    data.gameTraitsModifiers.attack = generateAttackLogic(traitModifier, wearable.rarityScoreModifier);
                    break;
                case 2: // spk
                    data.gameTraitsModifiers.critPercent =
                        generateCritLogic(traitModifier, wearable.rarityScoreModifier);
                    break;
                case 3: // brn
                    data.gameTraitsModifiers.ap = generateApLogic(traitModifier, wearable.rarityScoreModifier);
                    break;
            }
        }
    }
    return data;
}
function generateHpLogic(traitModifier, rarityScoreModifier) {
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
function generateAttackLogic(traitModifier, rarityScoreModifier) {
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
function generateCritLogic(traitModifier, rarityScoreModifier) {
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
function generateApLogic(traitModifier, rarityScoreModifier) {
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
function generateSecTraitsLogicFromCSV(wearable, data, csvData) {
    const wearableId = parseInt(wearable.id);
    const csvWearable = csvData.find((csv) => csv.id === wearableId.toString());
    if (csvWearable) {
        if (csvWearable.stat1) {
            // We need to split the string between the number and the property.
            const [number, property] = csvWearable.stat1.split(" ");
            const numberValue = parseFloat(number);
            // We need to transform the property name from PascalCase to camelCase
            const camelCaseProperty = property.charAt(0).toLowerCase() + property.slice(1);
            wearableId === 66 && console.log(camelCaseProperty);
            // We check if camelCaseProperty is a valid property in data.gameTraitsModifiers
            if (hasOwnProperty(data.gameTraitsModifiers, camelCaseProperty)) {
                data.gameTraitsModifiers[camelCaseProperty] = {
                    "+": [{ var: camelCaseProperty }, numberValue],
                };
            }
        }
        if (csvWearable.stat2) {
            // We need to split the string between the number and the property.
            const [number, property] = csvWearable.stat2.split(" ");
            const numberValue = parseFloat(number);
            // We need to transform the property name from PascalCase to camelCase
            const camelCaseProperty = property.charAt(0).toLowerCase() + property.slice(1);
            // We check if camelCaseProperty is a valid property in data.gameTraitsModifiers
            if (hasOwnProperty(data.gameTraitsModifiers, camelCaseProperty)) {
                data.gameTraitsModifiers[camelCaseProperty] = {
                    "+": [{ var: camelCaseProperty }, numberValue],
                };
            }
        }
    }
    return data;
}
function hasOwnProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}
function createEmptyDroptWearable() {
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
function replacer(key, value) {
    // Filtering out properties
    if (value === null) {
        return undefined;
    }
    return value;
}
generateWearableFiles();
//# sourceMappingURL=generateWearableFilesWith2ndStats.js.map