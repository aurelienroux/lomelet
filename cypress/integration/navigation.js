describe('App navigation', () => {
  it('opens and close nav menu', () => {
    cy.visit('/')
    cy.getBySelector('nav-menu').click()
    cy.getBySelector('nav-close').click()
  })

  it('goes back to homepage', () => {
    cy.visit('/principaux')
    cy.getBySelector('nav-home').click()
  })
})

describe('Nav menu links', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.getBySelector('nav-menu').click()
  })

  it('test principaux navigation link', () => {
    cy.getBySelector('nav-principaux').click()
    cy.url().should('include', '/principaux')
  })

  it('test a-cotes navigation link', () => {
    cy.getBySelector('nav-a-cotes').click()
    cy.url().should('include', '/a-cotes')
  })

  it('test tofu navigation link', () => {
    cy.getBySelector('nav-tofu').click()
    cy.url().should('include', '/tofu')
  })

  it('test desserts navigation link', () => {
    cy.getBySelector('nav-desserts').click()
    cy.url().should('include', '/desserts')
  })

  it('test smoothies navigation link', () => {
    cy.getBySelector('nav-smoothies').click()
    cy.url().should('include', '/smoothies')
  })

  it('test sauces navigation link', () => {
    cy.getBySelector('nav-sauces').click()
    cy.url().should('include', '/sauces')
  })
})
