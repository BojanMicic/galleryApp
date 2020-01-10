const users = require('../fixtures/users.json')

Cypress.Commands.add('apiLogin', (usr) => {
    let token
    cy.request({
        method : 'POST',
        url : 'https://gallery-api.vivifyideas.com/api/auth/login',
        body : {
            email: users[usr].email,
            password: users.password,
        },
    }).then((resp) => {
        token = resp.body.access_token
        localStorage.setItem('token', token)

      })
})
