describe('signin', function() {
    beforeEach(() => {
        cy.navigateToEtsy()
        cy.get("button.select-signin").click()
    })

    it('displays the Register button', function() {
        cy.get("button.register-header-action[type='button']", { timeout: 6000 }).should('be.visible')
    })

    it('displays the Email Address textbox', function() {
        cy.get("input#join_neu_email_field[name='email']").should('be.visible')
    })

    it('displays the Password textbox', function() {
        cy.get("input#join_neu_password_field[name='password']").should('be.visible')
    })

    it('displays the Sign in button', function() {
        cy.get("button[name='submit_attempt'][value='sign-in']").should('be.visible')
    })

    it('displays the Forgot your password? link', function() {
        cy.get("div>a[href*='/forgot_password?']").should('be.visible')
    })

    it('requires an email address to sign in', function() {
        cy.get("input#join_neu_email_field[name='email']").clear()
        cy.get("input#join_neu_password_field[name='password']").clear()

        cy.get("input#join_neu_password_field[name='password']").type('fakepassword')
        cy.get("button[name='submit_attempt'][value='sign-in']").click()
        cy.get("div#aria-join_neu_email_field-error[data-error]").should('be.visible')
    })

    it('requires a password to sign in', function() {
        cy.get("input#join_neu_email_field[name='email']").clear()
        cy.get("input#join_neu_password_field[name='password']").clear()

        cy.get("input#join_neu_email_field[name='email']").type('fakeuser@email.com')
        cy.get("button[name='submit_attempt'][value='sign-in']").click()
        cy.get("div#aria-join_neu_password_field-error[data-error]").should('be.visible')
    })

    it('requires an email address and password to sign in', function() {
        cy.get("input#join_neu_email_field[name='email']").clear()
        cy.get("input#join_neu_password_field[name='password']").clear()
        cy.get("button[name='submit_attempt'][value='sign-in']").click()

        cy.get("div#aria-join_neu_email_field-error[data-error]").should('be.visible')
        cy.get("div#aria-join_neu_password_field-error[data-error]").should('be.visible')
    })
})