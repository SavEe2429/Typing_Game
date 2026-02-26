import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: true, // จำเป็นเพื่อให้ Docker เข้าถึงได้
      port: 5173,
      watch: {
        usePolling: env.VITE_WATCH_USEPOLLING === 'true', // บังคับให้ Vite ตรวจไฟล์บ่อยๆ (แก้ปัญหารีโหลดบน Windows)
        interval: 100,    // เช็คทุกๆ 0.1 วินาที
      },
    },
  }
})