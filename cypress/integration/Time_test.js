describe('Results component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Contains a Time result when a new time is submitted', () => {
    cy.get('[data-cy=input]').type('08:00 PM, DAY 3') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=time]')
      .should('be.visible')
    cy.get('[data-cy=finish-time]')
      .should('be.visible')
      .should('have.text', '08:00 PM, DAY 3')
    cy.get('[data-cy=time-in-minutes]')
      .should('be.visible')
      .should('have.text', '3600 min')
    cy.get('[data-cy=runner-number]')
      .should('be.visible')
      .should('have.text', '1')
    cy.get('[data-cy=runner-icon]')
      .should('be.visible')
  })

  it('Contains the proper amount of time results', () => {
    cy.get('[data-cy=input]').type('08:00 PM, DAY 3') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=input]').type('08:00 PM, DAY 3') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=input]').type('08:00 PM, DAY 3') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('article').should(($article) => {
      expect($article).to.have.length(3)
  })

  
})
  




})