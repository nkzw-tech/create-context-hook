import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  };
});
