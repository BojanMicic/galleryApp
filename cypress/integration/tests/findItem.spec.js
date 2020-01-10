const locators = require('../../fixtures/locators.json')

describe('These tests check if users can use search functionality', () => {

    before(() => {
        cy.visit("/")
    })

    it('This test checks if users can search for a new QA Job', () => {
        cy
            .wait(2000)
            .get(locators.FIND.SEARCHINPUT).type("QA Engineer")
            .get(locators.FIND.FILTERBTN).click()
    })

    after(() => {
        cy.clearLocalStorage()
    })

})