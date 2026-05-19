import { test, expect } from '@playwright/test';

test('historia zapisuje wiele wyszukiwań', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');

  await page.selectOption('[data-testid="city-select"]', 'Warszawa');
  await page.selectOption('[data-testid="category-select"]', 'burger');
  await page.click('[data-testid="search-button"]');

  await page.selectOption('[data-testid="city-select"]', 'Kraków');
  await page.selectOption('[data-testid="category-select"]', 'pizza');
  await page.click('[data-testid="search-button"]');

  const historyItems = page.locator('[data-testid="history-item"]');

  await expect(historyItems.first()).toContainText('Kraków');
  await expect(historyItems).toHaveCount(2);
});



test('użytkownik widzi poprawną kolejność historii (najnowsze na górze)', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');

  await page.selectOption('[data-testid="city-select"]', 'Gdańsk');
  await page.selectOption('[data-testid="category-select"]', 'sushi');
  await page.click('[data-testid="search-button"]');

  await page.selectOption('[data-testid="city-select"]', 'Warszawa');
  await page.selectOption('[data-testid="category-select"]', 'burger');
  await page.click('[data-testid="search-button"]');

  const historyItems = page.locator('[data-testid="history-item"]');

  await expect(historyItems).toHaveCount(2);
  await expect(historyItems.first()).toContainText('Warszawa');
});
