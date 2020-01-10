const locators = require('../../fixtures/locators.json')

describe('These tests check if users can create a new gallery', () => {

    let num = Math.floor(Math.random() * 900000)

    beforeEach(() => {
        cy.apiLogin("main")
        cy.visit("/create")
    })

    it('This test checks if users get appropriate info message when image URL is not correct', () => {
        cy
            .get(locators.NEWGAL.TITLE).type("HeyVivifyIdeas")
            .get(locators.NEWGAL.DESC).type("Auto created gallery")
            .get(locators.NEWGAL.IMGURL).type("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKnoXxK5fD--JyM4HtdrXSE-xj0P9US_fe78VP-VtwAKy0_VY&s")
            .get(locators.NEWGAL.SUBMITBTN).eq(0).click()
            .get(locators.NEWGAL.ALERTBOX)
                .should('contain', "Wrong format of image")
    })

    it('This test checks if users can successfully create a gallery', () => {
        cy
            .get(locators.NEWGAL.TITLE).type("HeyVivifyIdeas" + num)
            .get(locators.NEWGAL.DESC).type("Auto created gallery")
            .get(locators.NEWGAL.IMGURL).type("http://www.kosnica.org/wp-content/uploads/2008/11/Vivify-Ideas-Logo.png")
            .get(locators.NEWGAL.SUBMITBTN).eq(0).click()
            .visit("/my-galleries")
            .get(".container")
                .should('contain', "HeyVivifyIdeas" + num)
    })

    after(() => {
        // cy.clearLocalStorage()
    })

})