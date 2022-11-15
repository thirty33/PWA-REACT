describe('Mi firts test', function() {
    it('app works', function () {
        cy.visit('/')
    })
    it('navigate to category and see photos', () => {
        cy.visit('pet/1')
        cy.get('article')
    })
    it('navigate with navbar to home', () => {
        cy.visit('pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include', '/')
    })
    it('unregistered users can see register form when go to /favs', () => {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})