import chalk from "chalk";

const log = console.log;

type Log = (msg: string) => void;

export const success: Log = (msg) => log(chalk.green(msg));
export const error: Log = (msg) => log(chalk.bold.red(msg));
export const warn: Log = (msg) => log(chalk.hex("#FFA500")(msg));
