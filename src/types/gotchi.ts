export type Gotchi = {
  id: string,
  name: string,
  traits: {
    brs: number
    agg: number
    nrg: number
    spk: number
    brn: number
    eys: number
    eyc: number
  }, 
  wearables: Array<number>
}

export const body = 0;
export const face = 1;
export const eyes = 2;
export const head = 3;
export const righthand = 4;
export const lefthand = 5;
export const pet = 6;