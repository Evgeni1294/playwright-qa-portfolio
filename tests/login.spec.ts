import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo Login Tests', () => {

    test('Successful Login with Valid Credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        // וידוא מעבר לדף המוצרים
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('Failed Login with Incorrect Password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('standard_user', 'wrong_password');

        // וידוא שהופעה הודעת שגיאה מתאימה
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    });

});