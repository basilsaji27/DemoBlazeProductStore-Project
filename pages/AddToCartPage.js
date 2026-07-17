import { expect } from "@playwright/test";
let successAlertMessage = '';
export class AddToCartPage {
    constructor(page) {
        this.page = page;
        this.product = page.getByRole('link', { name: 'Nokia lumia 1520' })
        this.addToCartButton = page.locator('//a[@onclick="addToCart(2)"]');

    }
    //Selecting the product
    async selectingTheProduct() {
        await this.product.click();
    }
    //clicking Add to Cart button
    async addingProductToCart() {
        this.page.on('dialog', async dialog => {
            successAlertMessage = dialog.message();
            await dialog.accept();
        })
        await this.addToCartButton.click();
    }
    //Validating product is added
    async validateAddingProductToCart() {
        expect(successAlertMessage).toBe('Product added.');
    }
}