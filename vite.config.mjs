import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        jsxRuntime: 'automatic', // Enables new React runtime (no need to import React manually)
    })],
});
