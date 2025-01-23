export type Gotchi = {
    id: string;
    name: string;
    traits: {
        brs: number;
        agg: number;
        nrg: number;
        spk: number;
        brn: number;
        eys: number;
        eyc: number;
    };
    wearables: Array<number>;
};
export declare const body = 0;
export declare const face = 1;
export declare const eyes = 2;
export declare const head = 3;
export declare const righthand = 4;
export declare const lefthand = 5;
export declare const pet = 6;
