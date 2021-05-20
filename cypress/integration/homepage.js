beforeEach(() => {
  cy.visit('/')
})

it('test principaux navigation link', () => {
  cy.getBySelector('hp-nav-principaux').click()
  cy.url().should('include', '/principaux')
})

it('test a-cotes navigation link', () => {
  cy.getBySelector('hp-nav-a-cotes').click()
  cy.url().should('include', '/a-cotes')
})

it('test tofu navigation link', () => {
  cy.getBySelector('hp-nav-tofu').click()
  cy.url().should('include', '/tofu')
})

it('test desserts navigation link', () => {
  cy.getBySelector('hp-nav-desserts').click()
  cy.url().should('include', '/desserts')
})

it('test smoothies navigation link', () => {
  cy.getBySelector('hp-nav-smoothies').click()
  cy.url().should('include', '/smoothies')
})

it('test sauces navigation link', () => {
  cy.getBySelector('hp-nav-sauces').click()
  cy.url().should('include', '/sauces')
})
