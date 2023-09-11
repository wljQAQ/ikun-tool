class Creator implements Plugin {
  command = "create"; //命令
  constructor() {}
  install(tool: Tool): void {
  }

  run(name: string) {
    
  }
}

export const creator = new Creator();
