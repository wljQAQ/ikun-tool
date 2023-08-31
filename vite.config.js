import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ikun-tool",
      fileName: "ikun-tool",
      formats: ["cjs"],
    },
  },
});
