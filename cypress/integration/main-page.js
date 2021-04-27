describe('Main Page Testing', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.fixture('civData.json')
      .then(testCivs => {
        cy.intercept('/civilizations', {
          body: testCivs
        })
      });
    cy.visit(baseURL)
  });

  it('Should display site name', () => {
    cy.get('.title').should('contain', 'AutoScout')
  })
  it('Should have an image with alt text in header', () => {
    cy.get('.title-pic').should('have.attr', 'src').should('include', 'scoutCav')
    cy.get('.title-pic').should('have.attr', 'alt')
      .then(altText => {
        expect(altText).to.equal('Sprite of a soldier on horse, known as Scout Cavalry in Age of Empires II')
      })
  })
  it('Should have numerous civs displayed', () => {
    cy.get('.gallery-box').get('.civ-name').should('have.length', 30)
    cy.get('.crest').eq(1).should('exist')
    cy.get('.crest').eq(6).should('exist')
    cy.get('.crest').eq(14).should('exist')
    cy.get('.crest').eq(19).should('exist')
    cy.get('.crest').eq(23).should('exist')
    cy.get('.crest').eq(29).should('exist')
  })

  it('Should have names for each crest', () => {
    cy.get('.civ-name').eq(0).should('contain', 'Aztecs')
    cy.get('.civ-name').eq(5).should('contain', 'Franks')
    cy.get('.civ-name').eq(13).should('contain', 'Saracens')
    cy.get('.civ-name').eq(18).should('contain', 'Berbers')
    cy.get('.civ-name').eq(21).should('contain', 'Incas')
    cy.get('.civ-name').eq(26).should('contain', 'Malians')
  })

  it('Should show civ data when selecting a civ', () => {
    cy.get('.civ-name').eq(2).click()
      .get('.civ-info').should('contain', 'Byzantines')
      .get('.civ-info').should('contain', 'Focus: Defensive')
      .get('.civ-info').should('contain', 'Civ Bonus:')
      .get('.civ-info').should('contain', 'Team Bonus: Monks +50% heal speed')
  })
  it('Should show a button to view details when selecting a civ', () => {
    cy.get('.civ-name').eq(3).click()
      .get('.primaryButton').should('contain', 'Inspect Celts')
  })
  it('Should show a button to view details when selecting a civ', () => {
    cy.get('.civ-name').eq(7).click()
      .get('.primaryButton').click()
      .get('.comp').should('contain', 'Complimentary Civs')
      .get('.stack').should('contain', 'Stacking Civs')
      .get('.fave-button').should('contain', 'Add/Remove from Favorites')
  })
  it('Should be able to return home by clicking title', () => {
    cy.get('.civ-name').eq(7).click()
      .get('.title').click()
      .get('.gallery-box').get('.civ-name').should('have.length', 30)
  })
})
