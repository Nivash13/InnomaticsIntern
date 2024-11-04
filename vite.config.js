import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/InnomacticsIntern/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})
