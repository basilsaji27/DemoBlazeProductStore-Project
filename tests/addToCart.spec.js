import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { AddToCartPage } from '../pages/AddToCartPage';

test('Verify user able to add a product to cart successfully', async ({ page }) => {
    const loginpage = new LoginPage(page);
    const addtocartpage = new AddToCartPage(page);
    await loginpage.applicationLaunch();
    await loginpage.loginUsingValidLoginCredentials();
    await addtocartpage.selectingTheProduct();
    await addtocartpage.addingProductToCart();
    await addtocartpage.validateAddingProductToCart();
})