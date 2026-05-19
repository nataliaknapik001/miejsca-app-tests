import { test, expect } from '@playwright/test';

test('użytkownik wyszukuje miejsca i sprawdza podstawowe UI', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');

  await expect(page.locator('h1')).toContainText('Miejsca w pobliżu');
  await expect(page.locator('[data-testid="city-select"]')).toBeVisible();

  await page.selectOption('[data-testid="city-select"]', 'Kraków');
  await page.selectOption('[data-testid="category-select"]', 'pizza');
  await page.click('[data-testid="search-button"]');

  const result = page.locator('.marker');

  await expect(result).toBeVisible();
  await expect(result).toContainText('pizza');
  await expect(result).toContainText('Kraków');
});



test('użytkownik może zmienić kategorię i zobaczyć nowy wynik', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');

  await page.selectOption('[data-testid="city-select"]', 'Warszawa');
  await page.selectOption('[data-testid="category-select"]', 'burger');
  await page.click('[data-testid="search-button"]');

  const result = page.locator('.marker');

  await expect(result).toContainText('burger');

  await page.selectOption('[data-testid="category-select"]', 'sushi');
  await page.click('[data-testid="search-button"]');

  await expect(result).toContainText('sushi');
  await expect(result).toContainText('Warszawa');
});