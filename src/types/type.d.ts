interface Tool {
  use(plugin: Plugin): void;
}
interface Plugin {
  install(tool: Tool): void;
}
