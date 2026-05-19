import { test, expect } from '@playwright/test';

test('wynik wyszukiwania jest poprawnie wyświetlany', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');

  await expect(page.locator('[data-testid="city-select"]')).toBeVisible();
  await expect(page.locator('[data-testid="category-select"]')).toBeVisible();
  await expect(page.locator('[data-testid="search-button"]')).toBeVisible();

  await page.selectOption('[data-testid="city-select"]', 'Gdańsk');
  await page.selectOption('[data-testid="category-select"]', 'sushi');
  await page.click('[data-testid="search-button"]');

  const result = page.locator('.marker');

  await expect(result).toBeVisible();
  await expect(result).toContainText('Gdańsk');
  await expect(result).toContainText('sushi');
});
