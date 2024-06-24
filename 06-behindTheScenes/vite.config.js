import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as million from "million/compiler";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({auto:true}),react()],
  server: {
    port: 3000,
  },
});