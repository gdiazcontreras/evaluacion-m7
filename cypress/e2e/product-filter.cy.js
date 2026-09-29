function openCategorySelect() {
  // Vuetify abre el menú desde el campo; su input tiene pointer-events: none.
  cy.get('#category-select').closest('.v-field').click()
}

describe('Filtro de productos', () => {
  it('filtra por categoría y permite volver a todos los productos', () => {
    cy.intercept('GET', 'https://dummyjson.com/products', {
      fixture: 'products.json'
    }).as('products')
    cy.visit('/')
    cy.wait('@products')
    cy.get('article').should('have.length', 3)
    cy.contains('article h3', 'Mochila de prueba').should('be.visible')
    cy.contains('article h3', 'Bolso de prueba').should('be.visible')
    cy.contains('article h3', 'Lámpara de prueba').should('be.visible')

    openCategorySelect()
    cy.contains('[role="listbox"] [role="option"]', /^accessories$/)
      .should('be.visible').click()
    cy.get('article').should('have.length', 2)
    cy.contains('article h3', 'Mochila de prueba').should('be.visible')
    cy.contains('article h3', 'Bolso de prueba').should('be.visible')
    cy.contains('article h3', 'Lámpara de prueba').should('not.exist')

    openCategorySelect()
    cy.contains('[role="listbox"] [role="option"]', 'Todas las categorías')
      .should('be.visible').click()
    cy.get('article').should('have.length', 3)
    cy.contains('article h3', 'Mochila de prueba').should('be.visible')
    cy.contains('article h3', 'Bolso de prueba').should('be.visible')
    cy.contains('article h3', 'Lámpara de prueba').should('be.visible')
  })
})
