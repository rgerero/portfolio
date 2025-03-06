import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: '/portfolio/', // 👈 Set this to your GitHub repo name
  base: './', // 👈 Set this for netlify
  plugins: [react()],
})
