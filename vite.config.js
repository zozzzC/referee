import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";
import vitePluginRequire from "vite-plugin-require";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
      commonjsOptions: { transformMixedEsModules: true },
    },
    plugins: [react(), commonjs(), vitePluginRequire()],
  };
});
