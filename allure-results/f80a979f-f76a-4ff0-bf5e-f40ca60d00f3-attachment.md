# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Veriy user login using valid credentials
- Location: tests\login.spec.js:4:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#nameofuser')
Expected substring: "Welcome"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#nameofuser')
    13 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
       - unexpected value ""

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: bas2711
    - text: "Password:"
    - textbox: bas2711
    - button "Close"
    - button "Log in"
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "Second slide"
  - img "Third slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
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
  15 |     async applicationLaunch() {
  16 |         await this.page.goto('https://www.demoblaze.com/');
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
> 27 |         await expect(this.userBtn).toContainText('Welcome');
     |                                    ^ Error: expect(locator).toContainText(expected) failed
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