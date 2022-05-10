describe('Results component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Contains a Results header with the correct font', () => {
    cy.get('[data-cy=results-label]')
      .should('be.visible')
      .should('have.css', 'font-family')
      .and('match', /serif/)
  })

  it('Contains a Results label that should read as "Results"', () => {
    cy.get('[data-cy=results-label]')
      .should('have.text', 'Results')
  })

  it('Contains an Average Time label with the correct font', () => {
    cy.get('[data-cy=average-label]')
      .should('be.visible')
      .should('have.css', 'font-family')
      .and('match', /serif/)
  })

  it('Contains an Average Time label that reads Average Time (minutes)', () => {
    cy.get('[data-cy=average-label]')
      .should('have.text', 'Average Time (min)')
  })

  it('Contains an Average Time value with the correct font', () => {
    cy.get('[data-cy=average-value]')
      .should('be.visible')
      .should('have.css', 'font-family')
      .and('match', /serif/)
  })

  it('Contains an Average Time value that is 0 by default', () => {
    cy.get('[data-cy=average-value]')
      .should('have.text', '0')
  })

  // Should be in time test file
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
      .get('img')
  })

  it('Contains the correct average time for test case #1', () => {
    cy.get('[data-cy=average-value]')
      .should('have.text', '0')
    cy.get('[data-cy=input]').type('12:00 PM, DAY 1') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=input]').type('12:01 PM, DAY 1') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=average-value]')
      .should('have.text', '241')
  })

  it('Contains the correct average time for test case #2', () => {
    cy.get('[data-cy=average-value]')
      .should('have.text', '0')
    cy.get('[data-cy=input]').type('12:00 AM, DAY 2') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=average-value]')
      .should('have.text', '960')
  })

  it('Contains the correct average time for test case #3', () => {
    cy.get('[data-cy=average-value]')
      .should('have.text', '0')
    cy.get('[data-cy=input]').type('02:00 PM, DAY 20') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=input]').type('02:00 PM, DAY 20') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=input]').type('01:58 PM, DAY 19') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=average-value]')
      .should('have.text', '27239')
  })
  
  
  




})
