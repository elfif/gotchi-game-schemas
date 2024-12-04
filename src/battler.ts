import { Gotchi } from './types/gotchi';
import { createBattlerGotchi } from './lib/battler';

const { Command } = require("commander"); // add this line
const figlet = require("figlet");

//add the following line
const program = new Command();

console.log(figlet.textSync("Battler Specs"));

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-l, --ls  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts();

const gotchi: Gotchi = {
  id: "1",
  name: "test",
  traits: {
    brs: 545,
    agg: 10,
    nrg: 11,
    spk: 12,
    brn: 13,
    eys: 14,
    eyc: 15,
  },
  wearables: [54, 295, 214, 309, 75, 79, 151],
};

function main() {
  const battlerGotchi = createBattlerGotchi(gotchi);
  console.log(battlerGotchi);
}

main();