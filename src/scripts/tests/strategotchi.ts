import { createStrategotchiGotchi } from "../../lib/strategotchi";
import { Gotchi } from "../../types/gotchi";

const { Command } = require("commander"); // add this line
const figlet = require("figlet");

//add the following line
const program = new Command();

console.log(figlet.textSync("Strategotchi TEST Cli", {font: "Big"}));

program
  .version("1.0.0")
  .description("Test script for Strategotchi")
  .parse(process.argv);

const options = program.opts();
const gotchi: Gotchi = {
  id: "11008",
  name: "GFA_FiFoOoO",
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

const g3045: Gotchi = {
  id: "11008",
  name: "polyaave",
  traits: {
    brs: 525,
    agg: 54,
    nrg: 100,
    spk: 100,
    brn: 99,
    eys: 78,
    eyc: 11,
  },
  wearables: [0,0,0,0,0,0,0],
};

const g9024: Gotchi = {
  id: "9024",
  name: "low wizard",
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

const g2935: Gotchi = {
  id: "2935",
  name: "crazylink",
  traits: {
    brs: 546,
    agg: 100,
    nrg: 100,
    spk: 14,
    brn: 100,
    eys: 98,
    eyc: 46,
  },
  wearables: [0,0,0,0,296,299,0],
};

const g21574: Gotchi = {
  id: "21574",
  name: "finergy",
  traits: {
    brs: 539,
    agg: 4,
    nrg: 102,
    spk: 3,
    brn: 25,
    eys: 78,
    eyc: 85,
  },
  wearables: [0,0,0,0,225,296,0],
};

function main() {
  const strategotchiGotchi = createStrategotchiGotchi(g21574);
  console.log(strategotchiGotchi);
}
main();

