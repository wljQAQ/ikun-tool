import { creator } from "./plugins";
import { IkunTool } from "./IkunTool";

import { program } from "commander";
export function run() {
  program.option("--first").option("-s, --separator <char>");
  // const ikunTool = new IkunTool();
  // ikunTool.use(creator);
  // ikunTool.run();
}
