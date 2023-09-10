class Creator implements Plugin {
  command = "create"; //命令
  name: string; //包名
  constructor(name: string) {}
  install(tool: Tool): void {}
}
