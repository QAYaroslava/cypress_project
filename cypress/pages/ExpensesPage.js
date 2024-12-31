class ExpensesPage {
    visit() {
      cy.visit('/panel/expenses');
    }
  
    addFuelExpense(liters, totalCost) {
      cy.contains('Add fuel expense').click();
      cy.get('input[name="liters"]').type(liters);
      cy.get('input[name="totalCost"]').type(totalCost);
      cy.contains('Add').click();
    }
  
    verifyExpenseInList(liters, totalCost) {
      cy.contains(`Volume: ${liters}`).should('be.visible');
      cy.contains(`Mileage: ${totalCost}`).should('be.visible');
    }
  }
  
  module.exports = new ExpensesPage();