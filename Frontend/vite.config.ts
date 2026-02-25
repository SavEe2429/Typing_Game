import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. เพิ่มตัวนี้

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // 2. วางไว้ข้างหน้า react plugin
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})