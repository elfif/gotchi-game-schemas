import { createDroptGotchi } from "../../lib/dropt";
import { Gotchi } from "../../types/gotchi";

const { Command } = require("commander"); // add this line
const figlet = require("figlet");

//add the following line
const program = new Command();

console.log(figlet.textSync("Dropt TEST Cli"));

program
  .version("1.0.0")
  .description("Dropt test script")
  .parse(process.argv);

const options = program.opts();
const gotchi: Gotchi = {
  id: "1",
  name: "test",
  traits: {
    brs: 545,
    agg: 101,
    nrg: 93,
    spk: 83,
    brn: 101,
    eys: 17,
    eyc: 20,
  },
  wearables: [105, 18, 66, 61, 65, 201, 151],
};

const g11008: Gotchi = {
  id: "11008",
  name: "FiFoOoO",
  traits: {
    brs: 612,
    agg: 105,
    nrg: 98,
    spk: 90,
    brn: 105,
    eys: 17,
    eyc: 20,
  },
  wearables: [105, 18, 66, 61, 65, 201, 151],
};

const g2935: Gotchi = {
  id: "2935",
  name: "Crazylink",
  traits: {
    brs: 546,
    agg: 100,
    nrg: 100,
    spk: 14,
    brn: 100,
    eys: 98,
    eyc: 46,
  },
  wearables: [0,0,0,0, 296, 299, 0],
};

const g21574: Gotchi = {
  id: "21574",
  name: "Finergy",
  traits: {
    brs: 539,
    agg: 4,
    nrg: 102,
    spk: 3,
    brn: 25,
    eys: 78,
    eyc: 85,
  },
  wearables: [0,0,0,0, 225, 296, 0],
};

const g21656: Gotchi = {
  id: "21656",
  name: "PeaceKeeper",
  traits: {
    brs: 550,
    agg: 0,
    nrg: 100,
    spk: 0,
    brn: 16,
    eys: 84,
    eyc: 26,
  },
  wearables: [0,0,0,0, 26, 64, 0],
};

const g15579: Gotchi = {
  id: "15579",
  name: "Zedoo",
  traits: {
    brs: 536,
    agg: 17,
    nrg: 97,
    spk: 97,
    brn: 97,
    eys: 58,
    eyc: 95,
  },
  wearables: [0,0,0,0, 229, 296, 0],
};

const g14006: Gotchi = {
  id: "14006",
  name: "GFAshion",
  traits: {
    brs: 524,
    agg: 0,
    nrg: 0,
    spk: 0,
    brn: 22,
    eys: 10,
    eyc: 44,
  },
  wearables: [0,0,0,0,0,0,0],
};

const g9024: Gotchi = {
  id: "9024",
  name: "LowWizard",
  traits: {
    brs: 523,
    agg: 97,
    nrg: 83,
    spk: 19,
    brn: 100,
    eys: 22,
    eyc: 80,
  },
  wearables: [0,0,0,0,0,0,0],
};


function main() {
  const droptGotchi = createDroptGotchi(g2935);
  console.log("droptGotchi", droptGotchi);
}
main();
