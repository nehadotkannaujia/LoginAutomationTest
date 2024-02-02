const {By} = require("selenium-webdriver")

class BasePage{
    constructor(driver, url){
        this.driver = driver
        this.url = url
    }
    async open(){
        await this.driver.get(this.url)
    }
    async close(){
        await this.driver.quit();
    }
    async writeByName(elName, text){
        await this.driver.findElement(By.name(elName)).sendKeys(text)
    }
    async btnClick(elId){
        await this.driver.findElement(By.id(elId)).click();
    }
    async getCssProperty(el, propertyName){
        await this.driver.findElement(By.id(elId)).getCssValue(propertyName);
    }
    async getTitle(){
        return this.driver.getTitle();
    }

    
}

module.exports = BasePage