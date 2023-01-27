import { defineConfig } from 'vitest/config';

import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    name: ' Word Wizzard ✨ ',
    coverage: {
      all: true,
      include: ['src/'],
      exclude: ['src/env', 'src/server', 'src/types'],
      reportsDirectory: 'coverage',
    },
  },
});
