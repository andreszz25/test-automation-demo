import { test, expect } from '@playwright/test';

test('testeando el componente button', async ({ page }) => {
  await page.goto('https://dojo.upexgalaxy.com/');

  await page.getByText('Text Fields').click();

  const basicTextField = page.getByTestId('text-input');

  const texto = 'Si puedes, pega el error completo o la parte de la terminal donde aparece Expected y Received, y te diré exactamente cuál es el problema.';

  await basicTextField.fill(texto);

  await expect(basicTextField).toHaveValue(texto);
});