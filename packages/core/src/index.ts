//https://github.com/minimistjs/minimist
import minimist from "minimist";
import prompts from "prompts";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
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
  const templates = parseTemplates();
  const result: prompts.Answers<"projectName" | "template"> = await prompts([
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

  const { template } = result;

  //接着就是拷贝模板到目标目录
}

//拷贝又分为 拷贝目录跟拷贝文件
function copy(src: string, dest: string) {
  const isDirectory = fs.statSync(src).isDirectory();

  //如果是文件夹
  if (isDirectory) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
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
  const root = fileURLToPath(import.meta.url);
  const templateRoot = path.join(root, "../../templates");
  let result: Templates = [];
  const files = fs.readdirSync(templateRoot);
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
