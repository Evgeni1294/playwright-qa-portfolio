import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('E2E Shopping Flow & API Tests', () => {

    test('Add item to cart E2E Flow', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // 1. התחברות
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        // 2. הוספת מוצר לסל
        await inventoryPage.addBackpackToCart();

        // 3. וידוא שהמוצר מופיע בעגלה (אינדיקטור 1)
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
    });

    test('API Test - Validate HTTP Response Status', async ({ request }) => {
        // בדיקת API פשוטה מול אתר SauceDemo לקבלת סטטוס 200
        const response = await request.get('https://www.saucedemo.com/');
        expect(response.status()).toBe(200);
    });

});