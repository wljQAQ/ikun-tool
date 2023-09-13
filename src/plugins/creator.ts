import fs from "fs-extra";
import path from "path";

class Creator implements Plugin {
  command = "create"; //命令
  packageName: string;
  constructor() {}
  install(tool: Tool): void {}

  run() {
    this.packageName = process.argv[3];
    console.log(__dirname);
  }
}

export const creator = new Creator();
