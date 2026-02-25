import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // จำเป็นเพื่อให้ Docker เข้าถึงได้
    port: 5173,
    watch: {
      usePolling: true, // บังคับให้ Vite ตรวจไฟล์บ่อยๆ (แก้ปัญหารีโหลดบน Windows)
      interval: 100,    // เช็คทุกๆ 0.1 วินาที
    },
  },
})