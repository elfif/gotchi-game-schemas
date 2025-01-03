import { RulesLogic } from "json-logic-js";

export type StrateGotchi = {
  id: string;
  traits: {
    health: number;
    critChance: number;
    critDamage: number;
    evasion: number;
    stepsCount: number;
    alchSite: number;
  };
  leftHand: StrategotchiWearable;
  rightHand: StrategotchiWearable;
};

export type StrategotchiWearable = {
  id: number;
  name: string;
  type: WearableType;
  damage: number;
  specialAbilities: Array<string>;
};

export type WearableType = "melee" | "ranged" | "lobbed" | "omni-targeting" | "aoe";
