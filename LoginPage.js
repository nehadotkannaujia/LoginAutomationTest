const BasePage = require("./BasePage")
const { Builder } = require("selenium-webdriver");

class LoginPage {
    driver;
    basePage;
    url = "https://practicetestautomation.com/practice-test-login/";
    constructor(){
    }

    async initializeDriver() {
        this.driver = await new Builder().forBrowser("firefox").build();
        this.basePage = new BasePage(this.driver, this.url)
        this.basePage.open();
    }
    async setUserName(text){
        await this.basePage.writeByName("username", text);
    }
    async setPassword(text){
        await this.basePage.writeByName("password", text);
    }
    async submit(){
        await this.basePage.btnClick("submit")
    }
    async  close(){
        if (this.driver) {
        await this.basePage.close();
        }
    }
    async getOpacityForErrorMsg(){
        return await this.basePage.getCssProperty("error", "opacity");
    }
    async  getTitle(){
        return await this.basePage.getTitle();
    }

}
module.exports = LoginPage