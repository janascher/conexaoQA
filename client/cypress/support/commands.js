// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import { faker } from '@faker-js/faker';
Cypress.Commands.add('createUser', () => {
  const name = faker.person.firstName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  // Loga os dados no console do Cypress
  cy.log(`User criado: ${name}, ${email}, ${password}`);

  // Retorna os dados embrulhados em um comando Cypress
  return cy.wrap({ name, email, password });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
