import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vvv-magazine/', // GitHub Repository 이름과 일치해야 합니다.
})
