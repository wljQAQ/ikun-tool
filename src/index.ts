import { creator } from "./plugins";
import { IkunTool } from "./IkunTool";

export function run() {
  const ikunTool = new IkunTool();

  ikunTool.use(creator);

  ikunTool.run()
}
