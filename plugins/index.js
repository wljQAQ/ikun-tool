const { spawn } = require("child_process");

//打包完后执行cmd命令
class IkunPlugun {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync("IkunPlugun", (compilation, callback) => {
      const cmd = spawn("npx", ["ikun-tool"], { shell: true });

      cmd.stdout.on("data", (data) => {
        console.log(`${data}`);
      });

      callback();
    });
  }
}

module.exports = IkunPlugun;
