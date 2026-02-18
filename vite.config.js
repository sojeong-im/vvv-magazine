import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vvv-magazine/', // GitHub Pages 배포를 위해 base 경로 복구
})
