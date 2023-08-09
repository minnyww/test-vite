import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", "src/components/index.jsx"),
      name: "react-library-scaffold",
      fileName: (format) => `react-library-scaffold.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
