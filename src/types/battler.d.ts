import { Classes } from "@/enums/battler";

export type BattlerGotchi = {
  id: string;
  classes: Array<Classes>;
  traits: {
    accuracy: number;
    armor: number;
    crit: number;
    evade: number;
    health: number;
    magic: number;
    physical: number;
    resist: number;
    speed: number;
  }
}