  import { test, expect } from '@playwright/test';
  import variables from '@/config/variables';
  import { TesterAndres } from '@/tests/pages/LoginPage';

  test('test', async ({ page }) => {
    const tester = new TesterAndres('John Doe', page);
    await page.goto('https://dojo.upexgalaxy.com/');
    await page.getByTestId('nav-login-link').click();
    await page.getByTestId('login-email-input').click();
    await page.getByTestId('login-email-input').fill(variables.DOJO_USER_MEMBER_EMAIL);
    await page.getByTestId('login-password-input').click();
    await page.getByTestId('login-password-input').fill(variables.DOJO_USER_MEMBER_PASSWORD);
    await page.getByTestId('login-password-input').press('Enter');
    await page.getByTestId('login-submit-button').click();

    const message = `Las credenciales fueron Email ${variables.DOJO_USER_MEMBER_EMAIL}`;
    
});