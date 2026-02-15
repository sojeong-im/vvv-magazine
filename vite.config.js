import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Netlify 배포를 위해 base 설정 제거 (루트 경로 사용)
})
