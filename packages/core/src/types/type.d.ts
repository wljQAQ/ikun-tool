interface Tool {
  use(plugin: Plugin): void;
}
interface Plugin {
  command: string;
  install(tool: Tool): void;
  run(): void;
}

interface Argv {
  t?: string;
  template?: string;
}

type ColorFunc = (str: string | number) => string;

type Template = {
  title: string;
  color: ColorFunc;
  description?: string;
};

type Templates = Template[];
