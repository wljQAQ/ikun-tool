<!--
 * @Author: wlj
 * @Date: 2022-10-21 16:20:03
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-21 16:42:35
 * @Description:
-->

# 一个 react+vite+router 模板

项目主要由 react+ react-router + vite 构成 包管理工具为 pnpm,代码规范遵循 eslint 推荐的 react 规范,git 提交规范由 husky(git 提交的钩子)+lint-staged+commitizen+commitlint 构成,集成了 immerjs 处理不可变数据

## 目录

1 .husky：git 提交钩子配置

2 public：静态资源文件夹

3 src：项目资源

assets：项目静态资源

components：组件(页面公共组件,cms 框架组件)

router：路由(index.tsx 主路由)

view：项目所有页面

App.tsx：项目主组件

main.tsx：项目入口文件

4 .env：对应模式的环境变量（开发 生产）

5 .eslintrc：ellint 配置

6 .gitignore：使用 git 推送到远程存储库时忽略的所有文件和文件夹的名称

7 .prettierrc：代码格式化配置

8 commitlint.config.js：检测 git commit 提交规范

9 vite.config:对 vite 的一些配置

10 package.json：当前项目的配置及依赖项

11 README.md：项目文档

12 pnpm.lock：项目依赖的具体版本

## git 提交规范

提交代码需要使用 npm run commit | pnpm commit：

具体可查询 commitizen

第一步是选择 type，本次更新的类型

Type 作用

fix 修复 Bug

docs 修改文档或注释

style 代码格式调整（空格缩进 尾随逗号等）：对逻辑无影响，比如按照
eslint prettierrc 或团队风格修改代码格式（注意不是 UI 变更）

refactor 重构（代码优化但不影响产品功能）：比如文件 变量重命名、优化代码设计、代码抽象为函数、消除魔法数字等

perf 改善性能 性能提升

test 测试相关变更

build 变更项目构建或外部依赖：例如 webpack、gulp、npm 等
ci 更改持续集成软件的配置文件和 package 中的 scripts 命令
chore 杂项（其他无法归类的变更）：比如代码合并
revert 代码回退

第二步选择本次修改的范围（作用域）

第三步选择提交的信息

第四步提交详细的描述信息

第五步是否是一次重大的更改

第六步是否影响某个 open issue
