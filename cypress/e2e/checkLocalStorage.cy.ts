let clicked = false
it('check for localStorage', () => {
  cy.visit('/New')
  cy.get('[data-test="btn-like"]').first().click()
  clicked = !clicked
  if (clicked) {
    cy.get('[data-test="btn-like"]').should('have.class', 'bg-gray-100')
    cy.window().then((window) => {
      const palette = window.localStorage.getItem('palette')
      expect(palette).to.not.be.null
      expect(palette).to.not.equal('')
    })
  } else {
    cy.window().then((window) => {
      const palette = window.localStorage.getItem('palette')
      expect(palette).to.be.null
      expect(palette).to.equal('')
    })
  }
})
