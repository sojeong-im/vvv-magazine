import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base 설정을 제거하여 기본값 '/' 사용 (Netlify 배포용)
  // GitHub Pages 배포 시에는 빌드 커맨드에서 --base 옵션으로 덮어씌움
})
