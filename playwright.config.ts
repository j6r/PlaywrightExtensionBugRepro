import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv-flow';
dotenv.config({ silent: true });

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  projects: [
    {
      name: 'setup',
      testMatch: '**/setup/*.setup.ts',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
      testMatch: '**/v2/*.spec.ts',
    }
  ],
});
