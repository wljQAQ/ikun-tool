interface Tool {
  use(plugin: Plugin): void;
}
interface Plugin {
  command: string;
  install(tool: Tool): void;
  run(): void;
}
