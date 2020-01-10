const locators = require('../../fixtures/locators.json')

describe('These tests check if users can use search functionality', () => {

    let galname = "Hey VivifyIdeas"

    before(() => {
        cy.apiLogin("main")
        cy.visit("/")
    })

    it('This test checks if users can search for a gallery', () => {
        cy
            .get(locators.FIND.SEARCHINPUT).type(galname)
            .get(locators.FIND.FILTERBTN).click()
            .get(".container")
                .should('contain', galname)
    })

    after(() => {
        cy.clearLocalStorage()
    })

})