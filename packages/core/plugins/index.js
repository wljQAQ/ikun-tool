const { spawn, exec } = require("child_process");
const path = require("path");

//打包完后执行cmd命令
class IkunPlugun {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync("IkunPlugun", (compilation, callback) => {
      spawn("npx", ["create-ikun"], {
        cwd:path.join(__dirname,'../../..'),
        shell: true,
        stdio: "inherit",
      });
      callback();
    });
  }
}

module.exports = IkunPlugun;
