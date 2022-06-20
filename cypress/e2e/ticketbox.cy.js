describe('ticketbox', function() {
  beforeEach(() => {
    cy.visit("index.html")
  })

  it('Check for the initial state', function() {
    cy.percySnapshot()
  })
})