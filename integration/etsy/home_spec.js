describe('home', function() {
    beforeEach(() => {
        cy.navigateToEtsy()
    })
    
    it('displays the Etsy logo', function() {
        cy.get("span#logo").should('be.visible')
    })

    it('displays the search bar and button', function() {
        cy.get("input[data-search-input][name='search_query']").should('be.visible')
        cy.get("button[type='submit'][value='Search']").should('be.visible')
    })

    it('displays the top navigation menu', function() {
        cy.get("div#desktop-category-nav").should('be.visible')
    })

    it('displays a sub navigation menu', function() {
        cy.get("li.top-nav-item>a").eq(1).trigger('mouseover')
        cy.get("div.sub-nav-container[aria-hidden='false']").should('be.visible')
    })

    it('displays the Sign in button', function() {
        cy.get("button.select-signin").should('be.visible')
    })

    it('displays the Cart icon link', function() {
        cy.get("a.wt-btn--icon[href*='cart']").should('be.visible')
    })
})