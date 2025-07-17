import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  project: ['app/**/*.ts'],
  eslint: {
    entry: [
      "eslint.config.mjs"
    ]
  },
  vitest: {
    config: [
      'vitest.config.ts'
    ],
    entry: [
      "__tests__/**"
    ]
  }
};

export default config;