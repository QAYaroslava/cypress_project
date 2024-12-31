class GaragePage {
    visit() {
      cy.visit('/panel/garage');
    }
  
    addCar(brand, model, mileage) {
      cy.contains('Add car').click();
      cy.get('select[name="carBrandId"]').select(brand);
      cy.get('select[name="carModelId"]').select(model);
      cy.get('input[name="mileage"]').type(mileage);
      cy.contains('Save').click();
    }
  
    verifyCarInList(brand, model, mileage) {
      cy.contains(`${brand} ${model}`).should('be.visible');
      cy.contains(`Mileage: ${mileage}`).should('be.visible');
    }
  }
  
  module.exports = new GaragePage();