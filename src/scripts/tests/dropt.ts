import { createDroptGotchi } from "../../lib/dropt";
import { Gotchi } from "../../types/gotchi";

const { Command } = require("commander"); // add this line
const figlet = require("figlet");

//add the following line
const program = new Command();

console.log(figlet.textSync("Dropt TEST Cli"));

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
    agg: 101,
    nrg: 93,
    spk: 83,
    brn: 101,
    eys: 17,
    eyc: 20,
  },
  wearables: [54, 295, 214, 309, 75, 79, 151],
};

function main() {
  const droptGotchi = createDroptGotchi(gotchi);
  console.log("droptGotchi", droptGotchi);
}
main();
