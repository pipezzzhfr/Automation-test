import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Logo from '../pageobjects/secure.page.js'

// describe('My Login application', () => {
//     // This hook ensures that the browser is ready before any tests run
//     before(async () => {
//         await LoginPage.open();  // Open the login page before running any tests
//     });

//     it('should login with valid credentials', async () => {
//         await LoginPage.login('standard_user', 'secret_sauce');
        
//         // Verifies if the logo exists in the DOM
//         await expect(Logo.image).toBeExisting(); 

//         // Verifies if the logo is displayed (visible)
//         await expect(Logo.image).toBeDisplayed(); 
//     });
//});
//this is the negative test it shouldnt let login with invalid credentials
describe('negative test', () => {
    it ('should not login with invalid credentials',async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'badpassword')
        // Verifies if the error message is displayed
        expect.stringContaining('Username and password do not match any user in this service');
    });
});