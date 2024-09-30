import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@const',
        replacement: path.resolve(path.join(__dirname, '/src/const')),
      },
      {
        find:'@components',
        replacement: path.resolve(path.join(__dirname, '/src/components')),
      },
      {
        find:'@assets',
        replacement: path.resolve(path.join(__dirname, '/src/assets')),
      },
      {
        find:'@utils',
        replacement: path.resolve(path.join(__dirname, '/src/utils')),
      }
    ],
  },
});
