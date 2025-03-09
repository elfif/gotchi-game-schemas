import { Gotchi } from '../../types/gotchi';
import { createBattlerGotchi } from '../../lib/battler';

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
    brs: 565,
    nrg: 105,
    agg: -6,
    spk: 42,
    brn: 105,
    eys: 17,
    eyc: 20,
  },
  wearables: [105, 295, 66, 61, 65, 201],
};

function main() {
  const battlerGotchi = createBattlerGotchi(gotchi);
  console.log(battlerGotchi);
}

main();