import './commands';

describe('Registration tests', () => {
    beforeEach(() => {

      cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto'
        }
      })
      });

    it('Checking validation of Registration form', () => {
        //Відкриття форми реєстрації
        cy.contains('Sign In').click();
        cy.get('.modal-content').should('be.visible');
        cy.contains('Registration').click();
        cy.get('.modal-content').should('be.visible');
    
        //Перевірка валідації поля Name
          cy.get('input[name="name"]').focus().blur();
          cy.get('input[name="name"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Name required');

          cy.get('input[name="name"]').type('%^&').blur();
          cy.get('input[name="name"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Name is invalid');
  
          cy.get('input[name="name"]').clear().type('A').blur();
          cy.get('input[name="name"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Name has to be from 2 to 20 characters long');
      
          cy.get('input[name="name"]').clear().type('A'.repeat(21)).blur();
          cy.get('input[name="name"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Name has to be from 2 to 20 characters long');

          cy.get('input[name="name"]').clear().type('Yara').blur();
          cy.get('input[name="name"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('not.exist');
    
          //Перевірка валідації поля Last Name
          cy.get('input[name="lastName"]').focus().blur();
          cy.get('input[name="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Last name required');

          cy.get('input[name="lastName"]').type('%^&').blur();
          cy.get('input[name="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Last name is invalid');
  
          cy.get('input[name="lastName"]').clear().type('A').blur();
          cy.get('input[name="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Last name has to be from 2 to 20 characters long');
      
          cy.get('input[name="lastName"]').clear().type('A'.repeat(21)).blur();
          cy.get('input[name="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Last name has to be from 2 to 20 characters long');

          cy.get('input[name="lastName"]').clear().type('Kucherenko').blur();
          cy.get('input[name="lastName"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('not.exist');
        
          //Перевірка валідації поля Email
          cy.get('input[name="email"]').focus().blur();
          cy.get('input[name="email"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Email required');

          cy.get('input[name="email"]').type('invalid-email').blur();
          cy.get('input[name="email"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Email is incorrect');

          cy.get('input[name="email"]').clear().type('yarakucherenko07@gmail.com').blur();
          cy.get('input[name="email"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('not.exist');

          //Перевірка валідації поля Password
          cy.get('input[name="password"]').focus().blur();
          cy.get('input[name="password"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Password required');

          cy.get('input[name="password"]').type('123').blur();
          cy.get('input[name="password"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'); // Помилка

          //Перевірка валідації поля Re-enter password
          cy.get('input[name="repeatPassword"]').clear().focus().blur();
          cy.get('input[name="repeatPassword"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Re-enter password required');

          cy.get('input[name="password"]').clear().type('Qwerty123');
          cy.get('input[name="repeatPassword"]').type('Qwerty12');
          cy.get('input[name="repeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('contain', 'Passwords do not match');

          cy.get('input[name="repeatPassword"]').clear().type('Qwerty123');
          cy.get('input[name="repeatPassword"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
          cy.get('.invalid-feedback').should('not.exist');

          //Реєстрація з валідними даними
          cy.contains('Register').click();

        });

        //Логін
        it('Login', () => {
        cy.contains('Sign In').click();
        cy.login('yarakucherenko07@gmail.com', 'Qwerty123');
        })
      });
