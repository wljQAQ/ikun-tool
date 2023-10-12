//https://github.com/minimistjs/minimist
import minimist from "minimist";
import prompts from "prompts";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { cyan, green, reset } from "kolorist";

//拿到用户的所有参数

const COLOR_MAP = {
  vue: green,
  vue3: green,
  react: cyan,
};

const TEMPLATE_PATH = path.resolve(fileURLToPath(import.meta.url), "../../templates");

const argv = minimist<Argv>(process.argv.slice(2));
const cwd = process.cwd();

//大致逻辑 如果有提供名称跟template名称就直接拷贝模板进去 否则就进入对话让用户选择
async function init() {
  const state = {
    name: argv._[0],
    template: argv.template || argv.t,
    get targetPath() {
      return path.resolve(cwd, state.name);
    },
    get sourcePath() {
      return path.resolve(TEMPLATE_PATH, state.template.toString());
    },
  };
  //进入对话
  const templates = parseTemplates();
  const result: prompts.Answers<"name" | "template" | "overwrite"> = await prompts([
    {
      type: state.name ? null : "text",
      name: "name",
      message: reset("请输入你的项目名称"),
      onState(val: string | number) {
        state.name = val.toString();
      },
    },
    {
      type: !fs.existsSync(state.targetPath) ? null : "confirm",
      name: "overwrite",
      message: reset("当前目录以存在是否进行覆盖"),
    },
    {
      type: state.template ? null : "select",
      name: "template",
      message: reset("请选择一个项目模板"),
      choices: templates.map((i) => {
        return {
          title: i.color(i.title),
          value: i.title,
        };
      }),
      onState(select) {
        state.template = select.value;
      },
    },
  ]);

  const { name, targetPath, sourcePath } = state;
  const { overwrite } = result;

  if (overwrite) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }

  //
  if (!fs.existsSync(targetPath)) fs.mkdirSync(targetPath);

  //接着就是拷贝模板到目标目录
  copy(sourcePath, targetPath);

  //更改packagename
  const pkgSrcPath = path.join(sourcePath, "package.json");
  const pkgDestPath = path.join(targetPath, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgSrcPath, "utf-8"));
  pkg.name = name;
  fs.writeFileSync(pkgDestPath, JSON.stringify(pkg, null, 2));
}

//拷贝又分为 拷贝目录跟拷贝文件
function copy(src: string, dest: string) {
  const isDirectory = fs.statSync(src)?.isDirectory();

  //如果是文件夹
  if (isDirectory) copyDir(src, dest);
  else fs.copyFileSync(src, dest);
}

function copyDir(src: string, dest: string) {
  //递归创建不存在的文件夹
  fs.mkdirSync(dest, { recursive: true });

  const templateFiles = fs.readdirSync(src);

  for (const file of templateFiles) {
    const srcFile = path.resolve(src, file);
    const destFile = path.resolve(dest, file);
    copy(srcFile, destFile);
  }
}

function parseTemplates(): Templates {
  let result: Templates = [];
  const files = fs.readdirSync(TEMPLATE_PATH);
  result = files.map((i) => {
    const startStr = i.split("-")[0];
    return {
      title: i,
      color: COLOR_MAP[startStr] || reset,
    };
  });

  return result;
}

export function run() {
  init();
}
