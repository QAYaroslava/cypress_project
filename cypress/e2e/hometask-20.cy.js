const GaragePage = require('../pages/GaragePage');
const ExpensesPage = require('../pages/ExpensesPage');

describe('Garage and Fuel Expenses', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('button:has-text("Sign in")').click();
    cy.get('input[name="email"]').type(Cypress.env('email'));
    cy.get('input[name="password"]').type(Cypress.env('password'));
    cy.get('button:has-text("Login")').click();
    cy.url().should('include', '/panel/garage');
  });

  it('should add a car and fuel expenses', () => {
    // Додаю автомобіль
    GaragePage.addCar('Audi', 'TT', '1200');
    GaragePage.verifyCarInList('Audi', 'TT', '1200');

    // Додаю витрати на паливо
    ExpensesPage.visit();
    ExpensesPage.addFuelExpense('20', '10000');
    ExpensesPage.verifyExpenseInList('20', '10000');
  });
});