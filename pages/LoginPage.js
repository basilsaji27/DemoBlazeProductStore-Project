import { expect } from "@playwright/test";
const loginCreds = require('../utils/signUpCredentials.json')
let alertMsg = '';
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginHeaderBtn = page.locator('#login2')
        this.loginUsername = page.locator('#loginusername')
        this.loginPassword = page.locator('#loginpassword')
        this.loginBtn = page.locator('//button[@onclick="logIn()"]')
        this.userBtn = page.locator('#nameofuser')
        this.logoutBtn = page.locator('#logout2')
    }

    async applicationLaunch() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async loginUsingValidLoginCredentials() {
        await this.loginHeaderBtn.click();
        await this.loginUsername.fill(loginCreds.username);
        await this.loginPassword.fill(loginCreds.password)
        await this.loginBtn.click();
    }

    async validateloginUsingValidLoginCredentials() {
        await expect(this.userBtn).toContainText('Welcome');
    }

    async loginUsingInValidUsernameValidPassword() {
        await this.loginHeaderBtn.click();
        await this.loginUsername.fill(loginCreds.invalidUsername);
        await this.loginPassword.fill(loginCreds.password);
        this.page.on('dialog', async dialog => {
            alertMsg = dialog.message();
            await dialog.accept();
        })
        await this.loginBtn.click();
    }

    async validatingLoginUsingInValidUsernameValidPassword() {
        expect(alertMsg).toBe('User does not exist.');
    }

    async loginUsingValidUsernameInvalidPassword() {
        await this.loginHeaderBtn.click();
        await this.loginUsername.fill(loginCreds.username);
        await this.loginPassword.fill(loginCreds.invalidPassword)
        this.page.on('dialog', async dialog => {
            alertMsg = dialog.message();
            await dialog.accept();
        })
        await this.loginBtn.click();
    }

    async validatingLoginUsingValidUsernameInvalidPassword() {
        expect(alertMsg).toBe('Wrong password.');
    }

    async loginUsingInValidUsernameInvalidPassword() {
        await this.loginHeaderBtn.click();
        await this.loginUsername.fill(loginCreds.invalidUsername);
        await this.loginPassword.fill(loginCreds.invalidPassword)
        this.page.on('dialog', async dialog => {
            alertMsg = dialog.message();
            await dialog.accept();
        })
        await this.loginBtn.click();
    }

    async validatingLoginUsingInvalidUsernameInvalidPassword() {
        expect(alertMsg).toBe('User does not exist.');
    }

    async logoutUser() {
        await this.logoutBtn.click();
    }

    async validatingLogout() {
        await expect(this.loginHeaderBtn).toContainText('Log in');
    }
}