describe('Main Page Testing', () => {
  const baseURL = 'http://localhost:3000/'
  beforeEach(() => {
    cy.fixture('civData.json')
      .then(testCivs => {
        cy.intercept('/civilizations', {
          body: testCivs
        })
      });
    });

    it('Should be able to check multiple civs basic info', () => {
      cy.visit(baseURL)
      cy.get('.civ-name').eq(8).click()
        .get('.civ-info').should('contain', 'Japanese')
        .get('.civ-info').should('contain', 'Focus: Infantry')
      cy.get('.civ-name').eq(15).click()
        .get('.civ-info').should('contain', 'Teutons')
        .get('.civ-info').should('contain', 'Focus: Infantry')
    })
    it('Should be able to check comparisons for each civ and return to home', () => {
      cy.get('.civ-name').eq(20).click()
        .get('.primaryButton').click()
        .get('.comp').should('exist')
        .get('.primaryButton').click()
        .get('.crest').eq(29).should('exist')
    })
    it('Should be able to favorite a civ and see that civ in the sidebar', () => {
      cy.get('.civ-name').eq(16).click()
        .get('.primaryButton').click()
        .get('.fave-button').click()
        .get('.primaryButton').click()
        .get('.favorites').should('contain', 'Turks')
    })
    it('Should be able to view favorited civs from other civs detail page', () => {
      cy.get('.gallery-box>.civ-gallery').find('.civ-name').eq(17).click()
        .get('.primaryButton').click()
        .get('.civ-info').should('contain', 'Vikings')
        .get('.primaryButton').should('contain', 'Return Home!')
        .get('.favorites>.civ-gallery').find('.civ-name').eq(0).click()
        .get('.civ-info').should('contain', 'Vikings')
        .get('.primaryButton').should('contain', 'Inspect Turks!').click()
        .get('.civ-info').should('contain', 'Turks')
    })
    it('Should be able to see complimentary civs from other civ pages', () => {
      cy.get('.comp-box>.civ-gallery').find('.civ-name').eq(0).click()
        .get('.civ-info').should('contain', 'Turks')
        .get('.primaryButton').should('contain', 'Inspect Britons!').click()
        .get('.civ-info').should('contain', 'Britons')
        .get('.primaryButton').should('contain', 'Return Home!')
    })
    it('Should be able to return to the home menu', () => {
      cy.get('.primaryButton').should('contain', 'Return Home!').click()
    })
    it('Should be able to unfavorite a civ', () => {
      cy.get('.gallery-box>.civ-gallery').find('.civ-name').eq(16).click()
        .get('.primaryButton').click()
        .get('.fave-button').click()
        .get('.primaryButton').click()
        .get('.favorites>.civ-gallery').should('be.empty')
    })
  })
