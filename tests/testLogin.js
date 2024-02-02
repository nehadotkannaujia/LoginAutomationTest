const assert = require("assert");
let LoginPage = require("../LoginPage");

describe("login functionality", () => {
    const loginPage = new LoginPage()

    beforeEach(async () => {
        await loginPage.initializeDriver()
    });

    afterEach(async () => {
            await loginPage.close();
    });

    it("verify successful login", async () => {
        try {
            await LoginPage.setUserName("student");
            await LoginPage.setPassword("Password123");
            await LoginPage.submit();
            

            const showErrorMsg = await LoginPage.getOpacityForErrorMsg();
            const title = await LoginPage.getTitle();

            assert.equal(showErrorMsg, 0);
            assert.equal(title, "Logged In Successfully | Practice Test Automation");

        } catch (e) {
            console.error("Error in verify successful login:", e);
        }
    });

    it("unsuccessful login", async () => {
        try {
            await LoginPage.setUserName("student");
            await LoginPage.setPassword("123");
            await LoginPage.submit();
            

            const showErrorMsg = await LoginPage.getOpacityForErrorMsg();
            const title = await LoginPage.getTitle();

            assert.equal(title, "Test Login | Practice Test Automation");
            assert.equal(showErrorMsg, 1);

        } catch (e) {
            console.error("Error in unsuccessful login:", e);
        }
    });

});

//run using following command --> npx mocha --no-timeouts 'tests/testLogin.js' --reporter mochawesome
