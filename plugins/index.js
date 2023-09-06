const { spawn, exec } = require("child_process");

//打包完后执行cmd命令
class IkunPlugun {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync("IkunPlugun", (compilation, callback) => {
      spawn("npx", ["ikun-tool"], { shell: true, stdio: "inherit" });

      callback();
    });
  }
}

module.exports = IkunPlugun;
