//https://github.com/minimistjs/minimist
import minimist from "minimist";
import prompts from "prompts";
import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";
import {
  blue,
  cyan,
  green,
  lightBlue,
  lightGreen,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from "kolorist";

//拿到用户的所有参数

const COLOR_MAP = {
  vue: green,
  react: cyan,
};

const argv = minimist<Argv>(process.argv.slice(2));
const cwd = process.cwd();

//大致逻辑 如果有提供名称跟template名称就直接拷贝模板进去 否则就进入对话让用户选择
async function init() {
  const name = argv._[0];
  const templateName = argv.template || argv.t;

  //进入对话
  const templates = await parseTemplates();
  const result = await prompts([
    {
      type: name ? null : "text",
      name: "projectName",
      message: reset("请输入你的项目名称"),
    },
    {
      type: templateName ? null : "select",
      name: "template",
      message: reset("请选择一个项目模板"),
      choices: templates.map((i) => {
        return {
          title: i.color(i.title),
          value: i.title,
        };
      }),
    },
  ]);
}

async function parseTemplates(): Promise<Templates> {
  const root = fileURLToPath(import.meta.url);
  const templateRoot = path.join(root, "../../templates");

  try {
    const files = await readdir(templateRoot);
    return files.map((i) => {
      const startStr = i.split("-")[0];
      return {
        title: i,
        color: COLOR_MAP[startStr] || reset,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export function run() {
  init();
}
