const expect = require('expect');
const { HomePage } = require('./po');
const { wait, quit } = require('../../common/basePage')


describe('Check Weather Home Page ', async function () {
    const homePage = new HomePage();

    before(() => {
        wait(20000)
    });

    it('Check the [Root] for the page', async () => {
        const check = await homePage.isElementPresent('root');
        expect(check).toEqual(true);
    });

    it('Check the [Date] for First Day', async () => {
        const result = await homePage.checkForDate();
        expect(result).not.toBe(undefined);
        expect(result).not.toBe(null);

    });

    it('Check the [Pressure] for First Day', async () => {
        const result = await homePage.checkForPressure();
        expect(result).not.toBe(undefined);
        expect(result).not.toBe(null);

    });
    it('Check the [Humidity] for First Day', async () => {
        const result = await homePage.checkForHumidity();
        expect(result).not.toBe(undefined);
        expect(result).not.toBe(null);

    });
    it('Check the [Description] for First Day', async () => {
        const result = await homePage.checkForDescription();
        expect(result).not.toBe(undefined);
        expect(result).not.toBe(null);

    });

    after(() => {
        /** Close page if you want to */
        quit();
    });
});
