describe('Login Tests', () => {
  it('Successfully logs in', () => {
    cy.visit('/')
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Welcome, admin').should('be.visible')
  })
})