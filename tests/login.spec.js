import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('Veriy user login using valid credentials', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.applicationLaunch();
    await loginpage.loginUsingValidLoginCredentials();
    await loginpage.validateloginUsingValidLoginCredentials();
})

test('Veriy user login using invalid username and valid password credentials', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.applicationLaunch();
    await loginpage.loginUsingInValidUsernameValidPassword();
    await loginpage.validatingLoginUsingInValidUsernameValidPassword();
})

test('Verify user login with valid username and invalid password', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.applicationLaunch();
    await loginpage.loginUsingValidUsernameInvalidPassword();
    await loginpage.validatingLoginUsingValidUsernameInvalidPassword();
})

test('Verify user login with invalid username and invalid password', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.applicationLaunch();
    await loginpage.loginUsingInValidUsernameInvalidPassword();
    await loginpage.validatingLoginUsingInvalidUsernameInvalidPassword();
})

test('Verify user login and logout', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.applicationLaunch();
    await loginpage.loginUsingValidLoginCredentials();
    await loginpage.logoutUser();
    await loginpage.validatingLogout();
})