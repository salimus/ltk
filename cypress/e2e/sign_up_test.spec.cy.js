describe('Sign Up Test', () => {
    it('Should sign up as a new user and verify redirection to the Discover home page', () => {
        cy.visit('https://www.shopltk.com');
    
        // Click on the Sign Up button
        cy.get('a[href="/signup"]').click();
    
        // Type email
        let random = Math.ceil(Math.random()) + Math.random()
        cy.title().should('eq', 'Sign Up for an LTK Account | LTK')
        cy.get('#input-15').type('ltk' + random + '@yopmail.com');
        cy.get('span[class="v-btn__content"]').find('span').contains('continue').click()
        
        // Type password
        cy.get('#input-34').type('password123');
        // Click on the Sign Up button
        cy.get('span[class="v-btn__content"]').find('span').contains('sign up to begin shopping').click();
        
        cy.wait(2000)
    
        // Verify redirection to the Discover home page, title and user menu
        cy.url().should('include', '/home/for-you');
        
        cy.title().should('eq', 'Discover content from our community of Creators | LTK')
        
        cy.get('.ltk-header__user-menu').should('be.visible');
    });
});
  