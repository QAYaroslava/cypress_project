describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/todo')
    const newTodoName = 'newTodo';
    cy.get('[class="todo-list"] li').eq(0).should('have.text', 'Pay electric bill');
    cy.get('[class="todo-list"] li').eq(1).should('have.text', 'Walk the dog');
    cy.contains('All').click();
  });
  it('passes', () => {
    cy.visit('https://example.cypress.io/utilities')
    cy.scrollTo('bottom')
  })

})