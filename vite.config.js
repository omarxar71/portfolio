import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // THIS MUST MATCH YOUR REPO NAME
  plugins: [react()],
})
