import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly shoppingCartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    }

    async addBackpackToCart() {
        await this.addToCartButton.click();
    }
}