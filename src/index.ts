import chalk from "chalk";

const log = console.log;
const success = (msg) => log(chalk.green(msg));
// const error = (msg) => log(chalk.bold.red(msg));
// const warn = (msg) => log(chalk.hex("#FFA500")(msg));
class IkunTool implements Tool {
  tools: Plugin[];
  command: string; //命令
  commandArgs: string[]; //命令参数

  constructor() {
    this.welcome();
    this.command = process.argv[2];
    this.commandArgs = process.argv;
    log(this);
  }

  use(plugin: Plugin): void {
    this.tools.push(plugin);
  }

  welcome() {
    success("---------------------------------------------------------");
    success("welcome to ikun-tool");
  }
}

export function run() {
  new IkunTool();
}
