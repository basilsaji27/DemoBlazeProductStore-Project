import { test, expect } from '@playwright/test'
import { SignUpPage } from '../pages/SignUpPage'

test("New User Sign Up", async ({ page }) => {
    const signuppage = new SignUpPage(page);
    await signuppage.applicationLaunch();
    await signuppage.newUserSignUp();
    await signuppage.validatingSuccessfullSignUp();
})

test('Unsuccessful Sign Up', async ({ page }) => {
    const signuppage = new SignUpPage(page);
    await signuppage.applicationLaunch();
    await signuppage.ignoreSignUp();
    await signuppage.validatingUnsuccessfulSignUp();
})