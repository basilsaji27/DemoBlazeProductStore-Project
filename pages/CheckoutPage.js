import { expect } from "@playwright/test";
const orderDetails = require('../utils/orderDetails.json')
let successAlertMessage = ''
export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.phoneMenu = page.getByRole('link', { name: 'Phones' })
        this.phoneItem = page.getByRole('link', { name: 'Nexus 6' })
        this.monitorMenu = page.getByRole('link', { name: 'Monitors' })
        this.monitorItem = page.getByRole('link', { name: 'Apple monitor 24' })
        this.addToCartBtn = page.getByRole('link', { name: 'Add to cart' })
        this.cartMenu = page.locator('#cartur');
        this.placeOrderBtn = page.locator('//button[@data-target="#orderModal"]');
        this.nameField = page.locator("#name");
        this.countryField = page.locator("#country");
        this.cityField = page.locator("#city");
        this.ccField = page.locator("#card");
        this.monthField = page.locator("#month");
        this.yearField = page.locator("#year");
        this.purchaseBtn = page.locator('//button[@onclick="purchaseOrder()"]');
    }

    //Phone menu selection
    async locatingPhoneMenu() {
        await this.phoneMenu.click();
    }
    //Monitor menu selection
    async locatingMonitorMenu() {
        await this.monitorMenu.click();
    }
    //Phone item selection
    async selectingPhoneItem() {
        await this.phoneItem.click();
    }
    //Monitor item selection
    async selectingMonitorItem() {
        await this.monitorItem.click();
    }
    //Adding product to cart
    async addingProductToCart() {
        this.page.on('dialog', async dialog => {
            successAlertMessage = dialog.message();
            await dialog.accept();
        })
        await this.addToCartBtn.click();
    }
    //Targetting Cart menu in top bar
    async locatingCartMenu() {
        await this.cartMenu.click();
    }
    //Clicking the Place Order button in checkout page
    async placingOrder() {
        await this.placeOrderBtn.click();
    }
    //Checkout completion page
    async productCheckout() {
        await this.nameField.fill(orderDetails.name);
        await this.countryField.fill(orderDetails.country);
        await this.cityField.fill(orderDetails.city);
        await this.ccField.fill(orderDetails.ccard);
        await this.monthField.fill(orderDetails.month);
        await this.yearField.fill(orderDetails.year);
        await this.purchaseBtn.scrollIntoViewIfNeeded();
        await this.purchaseBtn.click();
    }
    //Successfull product purchase
    async validateProductCheckout() {
        await expect(this.page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
    }
}