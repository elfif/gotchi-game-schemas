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
  type: StrategotchiWearableType;
  damage: number;
  specialAbilities: Array<string>;
};

export type StrategotchiWearableType = "melee" | "ranged" | "lobbed" | "omni-targeting" | "aoe";
