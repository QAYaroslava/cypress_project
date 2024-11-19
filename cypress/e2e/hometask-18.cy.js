describe('To find all buttons on header and footer', () => {
    beforeEach(() => {
     
      cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto'
        }
      })
    });
  
    it('Should find all buttons in the header', () => {

      cy.get('header button').each((button, index) => {
        cy.wrap(button).should('be.visible');
      });
    });
  
    it('Should find all links in the footer', () => {
      cy.scrollTo('bottom');
      cy.get('footer a').each((link, index) => {
        cy.wrap(link).should('be.visible');
});
  })
})