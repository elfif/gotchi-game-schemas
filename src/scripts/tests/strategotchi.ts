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
    brs: 545,
    agg: 101,
    nrg: 93,
    spk: 83,
    brn: 101,
    eys: 17,
    eyc: 20,
  },
  wearables: [54, 295, 214, 309, 65, 201, 151],
};

function main() {
  const strategotchiGotchi = createStrategotchiGotchi(gotchi);
  console.log(strategotchiGotchi);
}
main();

