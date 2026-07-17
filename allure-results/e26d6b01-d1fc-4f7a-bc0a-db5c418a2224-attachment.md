# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.js >> Verify user able to add a monitor to cart and checkout the product successfully
- Location: tests\checkout.spec.js:19:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.demoblaze.com/
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | const loginCreds = require('../utils/signUpCredentials.json')
  3  | let alertMsg = '';
  4  | export class LoginPage {
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.loginHeaderBtn = page.locator('#login2')
  8  |         this.loginUsername = page.locator('#loginusername')
  9  |         this.loginPassword = page.locator('#loginpassword')
  10 |         this.loginBtn = page.locator('//button[@onclick="logIn()"]')
  11 |         this.userBtn = page.locator('#nameofuser')
  12 |         this.logoutBtn = page.locator('#logout2')
  13 |     }
  14 | 
  15 |     async setup() {
> 16 |         await this.page.goto('https://www.demoblaze.com/');
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.demoblaze.com/
  17 |     }
  18 | 
  19 |     async loginUsingValidLoginCredentials() {
  20 |         await this.loginHeaderBtn.click();
  21 |         await this.loginUsername.fill(loginCreds.username);
  22 |         await this.loginPassword.fill(loginCreds.password)
  23 |         await this.loginBtn.click();
  24 |     }
  25 | 
  26 |     async validateloginUsingValidLoginCredentials() {
  27 |         await expect(this.userBtn).toContainText('Welcome');
  28 |     }
  29 | 
  30 |     async loginUsingInValidUsernameValidPassword() {
  31 |         await this.loginHeaderBtn.click();
  32 |         await this.loginUsername.fill(loginCreds.invalidUsername);
  33 |         await this.loginPassword.fill(loginCreds.password);
  34 |         this.page.on('dialog', async dialog => {
  35 |             alertMsg = dialog.message();
  36 |             await dialog.accept();
  37 |         })
  38 |         await this.loginBtn.click();
  39 |     }
  40 | 
  41 |     async validatingLoginUsingInValidUsernameValidPassword() {
  42 |         expect(alertMsg).toBe('User does not exist.');
  43 |     }
  44 | 
  45 |     async loginUsingValidUsernameInvalidPassword() {
  46 |         await this.loginHeaderBtn.click();
  47 |         await this.loginUsername.fill(loginCreds.username);
  48 |         await this.loginPassword.fill(loginCreds.invalidPassword)
  49 |         this.page.on('dialog', async dialog => {
  50 |             alertMsg = dialog.message();
  51 |             await dialog.accept();
  52 |         })
  53 |         await this.loginBtn.click();
  54 |     }
  55 | 
  56 |     async validatingLoginUsingValidUsernameInvalidPassword() {
  57 |         expect(alertMsg).toBe('Wrong password.');
  58 |     }
  59 | 
  60 |     async loginUsingInValidUsernameInvalidPassword() {
  61 |         await this.loginHeaderBtn.click();
  62 |         await this.loginUsername.fill(loginCreds.invalidUsername);
  63 |         await this.loginPassword.fill(loginCreds.invalidPassword)
  64 |         this.page.on('dialog', async dialog => {
  65 |             alertMsg = dialog.message();
  66 |             await dialog.accept();
  67 |         })
  68 |         await this.loginBtn.click();
  69 |     }
  70 | 
  71 |     async validatingLoginUsingInvalidUsernameInvalidPassword() {
  72 |         expect(alertMsg).toBe('User does not exist.');
  73 |     }
  74 | 
  75 |     async logoutUser() {
  76 |         await this.logoutBtn.click();
  77 |     }
  78 | 
  79 |     async validatingLogout() {
  80 |         await expect(this.loginHeaderBtn).toContainText('Log in');
  81 |     }
  82 | }
```