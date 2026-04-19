import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['**/__tests__/**/*.js'],
    exclude: ['**/node_modules/**', '**/__tests__/fixtures/**'],
  },
});
