import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/InnomaticsIntern/task7/', // Base path includes the project name and the subdirectory
  build: {
    outDir: 'docs', // Output directory for build files
  },
  plugins: [react()],
});
