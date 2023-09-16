import { success, error, warn } from "./utils/index";

export class IkunTool implements Tool {
  tools: Map<string, Plugin>;
  command: string; //命令
  commandArgs: string[]; //命令参数

  constructor() {
    this.welcome();
    this.tools = new Map();
    this.command = process.argv[2];
    this.commandArgs = process.argv;
  }

  use(plugin: Plugin): void {
    plugin.install(this);
    this.tools.set(plugin.command, plugin);
  }

  run() {
    const cmd = this.tools.get(this.command);
    cmd.run();
  }

  welcome() {
    success("---------------------------------------------------------");
    success("welcome to ikun-tool");
  }
}
