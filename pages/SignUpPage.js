const {expect} = require('@playwright/test')
const signupCreds = require('../utils/signUpCredentials.json')
let successAlertMsg = '';
export class SignUpPage{
    constructor(page){
        this.page = page
        this.signupheaderbtn = page.locator('#signin2')
        this.signupusername = page.locator('#sign-username')
        this.signuppassword = page.locator('#sign-password')
        this.signupbtn = page.locator('//button[@onclick="register()"]')
        this.signupclosebtn = page.locator('#signInModal').getByLabel('Close');
        
    }

    async applicationLaunch() {
        await this.page.goto('https://www.demoblaze.com/')
    }

    async newUserSignUp(){
        await this.signupheaderbtn.click();
        await this.signupusername.fill(signupCreds.signUpUsername)
        await this.signuppassword.fill(signupCreds.signUpPassword)
        this.page.on('dialog', async dialog => { 
            successAlertMsg = dialog.message();
            await dialog.accept();
        })
        await this.signupbtn.click() 
    }

    async validatingSuccessfullSignUp(){
        expect(successAlertMsg).toBe('Sign up successful.');
    }

    async ignoreSignUp(){
        await this.signupheaderbtn.click();
        await this.signupusername.fill(signupCreds.signUpUsername)
        await this.signuppassword.fill(signupCreds.signUpPassword)
        await this.signupclosebtn.click();
    }
    async validatingUnsuccessfulSignUp(){
        await expect(this.signupheaderbtn).toHaveText('Sign up');
    }
}