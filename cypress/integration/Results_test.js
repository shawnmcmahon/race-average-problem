describe('Results component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Contains a Results header with the correct font', () =>{
    cy.get('[data-cy=results-label]')
      .should('be.visible')
      .should('have.css', 'font-family')
      .and('match', /serif/)
  })

  it('Contains a Results label should read as Results', () =>{
    cy.get('[data-cy=results-label]')
      .should('have.text', 'Results')
  })

  it('Contains an Average Time label with the correct font', () =>{
    cy.get('[data-cy=average-label]')
      .should('be.visible')
      .should('have.css', 'font-family')
      .and('match', /serif/)
  })

  it('Contains an Average Time label that reads "Average Time minutes', () =>{
    cy.get('[data-cy=average-label]')
      .should('have.text', 'Average Time (minutes)')
  })

  it('Contains an Average Time value with the correct font', () =>{
    cy.get('[data-cy=average-value]')
      .should('be.visible')
      .should('have.css', 'font-family')
      .and('match', /serif/)
  })

  it('Contains an Average Time value that is 0 by default', () =>{
    cy.get('[data-cy=average-value]')
      .should('have.text', '0')
  })
  
  




})
