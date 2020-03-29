const locator = require('./locator');
const { isElementPresent, findElementByXPath } = require('../../common/basePage')

class HomePage {

    async isElementPresent(id) {
        return await isElementPresent(id);
    }

    async checkForDate() {
        let result = await findElementByXPath(locator.date);
        return await result.getText();
    }
    async checkForPressure() {
        let result = await findElementByXPath(locator.pressure);
        return await result.getText();
    }
    async checkForHumidity() {
        let result = await findElementByXPath(locator.humidity);
        return await result.getText();
    }
    async checkForDescription() {
        let result = await findElementByXPath(locator.description);
        return await result.getText();
    }

}

module.exports = { HomePage };