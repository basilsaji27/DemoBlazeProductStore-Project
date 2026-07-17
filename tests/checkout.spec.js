import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { CheckoutPage } from '../pages/CheckoutPage'

test('Verify user able to add a phone to cart and checkout the product successfully', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const checkoutpage = new CheckoutPage(page);
    await loginpage.applicationLaunch();
    await loginpage.loginUsingValidLoginCredentials();
    await checkoutpage.locatingPhoneMenu();
    await checkoutpage.selectingPhoneItem();
    await checkoutpage.addingProductToCart();
    await checkoutpage.locatingCartMenu();
    await checkoutpage.placingOrder();
    await checkoutpage.productCheckout();
    await checkoutpage.validateProductCheckout();
})

test('Verify user able to add a monitor to cart and checkout the product successfully', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const checkoutpage = new CheckoutPage(page);
    await loginpage.applicationLaunch();
    await loginpage.loginUsingValidLoginCredentials();
    await checkoutpage.locatingMonitorMenu();
    await checkoutpage.selectingMonitorItem();
    await checkoutpage.addingProductToCart();
    await checkoutpage.locatingCartMenu();
    await checkoutpage.placingOrder();
    await checkoutpage.productCheckout();
    await checkoutpage.validateProductCheckout();
})