describe('teapot page', () => {
  beforeEach(() => {
    cy.visit({
      url: '/teapot',
      failOnStatusCode: false,
    })
  })

  context('pages load correctly', () => {
    it('refuses to brew coffee', () => {
      cy.request({
        url: '/teapot',
        failOnStatusCode: false,
      }).then((resp) => {
        expect(resp.status).to.eq(418)
        expect(resp.redirectedToUrl).to.eq(undefined)
      })
    })
  })
})
