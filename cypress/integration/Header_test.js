describe('Header component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Contains a header at the top of the page', () =>{
    cy.get('[data-cy=header]')
      .should('be.visible')
      .should('have.css', 'background-color')
  })
  
  it('Contains a logo image in the header', () =>{
    cy.get('[data-cy=logo]')
      .should('have.attr', 'src')
  })

})

