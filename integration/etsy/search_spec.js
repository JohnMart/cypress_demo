describe('search', function() {
    beforeEach(() => {
        cy.navigateToEtsy()
        cy.get("button[type='submit'][value='Search']").click()
    })
    
    it('displays all search categories', function() {
        cy.get("div.sidenav-filter-group.col-group").should('be.visible')
    })

    it('displays the search results grid', function() {
        cy.get("div.search-listings-group").should('be.visible')
    })

    it('can search by term', function() {
        cy.get("input[data-search-input][name='search_query']").type('BMW E28 Keychain')
        cy.get("button[type='submit'][value='Search']").click()
        cy.get("h1.wt-text-caption").should(($h1) => {
            expect($h1).to.contain('BMW E28 Keychain')
        })
        cy.get("ul.responsive-listing-grid.wt-grid").should('be.visible')
    })

    it('can filter by category', function() {
        cy.get("a[data-path='home_and_living']").click()
        cy.get("div.float-left>h1").should(($h1) => {
            expect($h1).to.contain("Home & Living")
        })
    })
})