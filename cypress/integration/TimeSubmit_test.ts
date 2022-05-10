describe('TimeSubmit Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Contains a properly styled input label', () => {
    cy.get('[data-cy=input-label]')
      .should('be.visible')
      .should('have.css', 'font-family')
      .and('match', /serif/)
  })

  it('Contains input label with the text Race Time', () => {
    cy.get('[data-cy=input-label]')
      .should('have.text', 'Race Time')
  })

  it('Contains input box with the proper attributes', () => {
    cy.get('[data-cy=input]')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'ex: 08:01 PM, DAY 3')
      .should('have.attr', 'type', 'text')
      .should('have.attr', 'class')
  })

  it('Contains a submit button', () => {
    cy.get('[data-cy=submit-button]')
      .should('be.visible')
      .contains('Submit')
  })

  it('Contains a clear button', () => {
    cy.get('[data-cy=clear-button]')
      .should('be.visible')
      .contains('Clear')
  })

  it('Should have no warning text upon load', () => {
    cy.get('[data-cy=warning]')
      .should('have.text', '')
  })

  it('Should inform the user of a format error if one exists', () => {
    cy.get('[data-cy=input]').type('0800 PM, DAY 3') 
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=warning]')
      .should('have.text', 'Please confirm time format matches placeholder text')
    cy.get('[data-cy=clear-button]').click()
  })

  it('Should clear input upon clicking submit button', () => {
    cy.get('[data-cy=input]').type('08:00 PM, DAY 3')
    cy.get('[data-cy=input]').should('have.attr', 'value', '08:00 PM, DAY 3')
    cy.get('[data-cy=submit-button]').click()
    cy.get('[data-cy=input]').should('have.attr', 'value', '')
  })

  it('Should clear input upon clicking clear button', () => {
    cy.get('[data-cy=input]').type('08:00 PM, DAY 3')
    cy.get('[data-cy=input]').should('have.attr', 'value', '08:00 PM, DAY 3')
    cy.get('[data-cy=clear-button]').click()
    cy.get('[data-cy=input]').should('have.attr', 'value', '')
  })
  
})

export default {}



