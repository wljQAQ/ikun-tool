import chalk from "chalk";

const log = console.log;
const success = (msg) => log(chalk.green(msg));
// const error = (msg) => log(chalk.bold.red(msg));
// const warn = (msg) => log(chalk.hex("#FFA500")(msg));

success("welcome to ikun-tool,please select the template you want~");

export function run() {
  log("running ");
}
