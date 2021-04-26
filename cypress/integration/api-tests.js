describe('API-Testing', () => {
  const baseURL = 'http://localhost:3000/'

  it('Should successfully GET civs from API', () => {
    cy.visit(baseURL)
      .get('.gallery-box').get('.civ-name').should('have.length', 32)
      .get('.civ-name').eq(0).should('contain', 'Aztecs')
      .get('.civ-name').eq(5).should('contain', 'Franks')
      .get('.civ-name').eq(13).should('contain', 'Saracens')
      .get('.civ-name').eq(18).should('contain', 'Berbers')
      .get('.civ-name').eq(22).should('contain', 'Incas')
      .get('.civ-name').eq(28).should('contain', 'Malians')
  })
  it('Should show an error message on failed load', () => {
    cy.intercept({
        url:'/civilizations'
      },{
        statusCode: 404,
        body: {
          "error": "This page does not exist"
        }
      })
    cy.visit(baseURL)
    cy.get('.gallery-box').should('contain', 'Our scouts cannot find any civs...')
  })
  it('Should show an error message on server error', () => {
    cy.intercept({
        url:'/civilizations'
      },{
        statusCode: 500,
        body: {
          "error": "This page does not exist"
        }
      })
    cy.visit(baseURL)
    cy.get('.gallery-box').should('contain', 'Our scouts cannot find any civs...')
  })
  it('Should show an error message when civ data is unavailable', () => {
    cy.intercept({
        url:'/civilizations'
      },{
        statusCode: 500,
        body: {
          "error": "This page does not exist"
        }
      })
    cy.visit(`${baseURL}wakanda`)
    cy.get('.error').should('contain', 'Our scout is having difficulty finding your civ...')
  })

})
