import { expect, test as setup } from '@playwright/test';

setup('authenticate', async () => {
  // ignore the error marker here, it's not a true error
  const userEmail = `${process.env.USER_EMAIL}`;
  await expect(userEmail).toBe('test email');
});
