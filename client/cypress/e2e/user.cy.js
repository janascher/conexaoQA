/// <reference types="cypress"/>

import { login, register } from '../../src/actions/auth';
import { createProfile } from '../../src/actions/profile';

describe('Cadastro de Usuário', () => {
  let user;

  beforeEach(() => {
    cy.createUser().then((newUser) => {
      user = newUser;

      cy.visit('/');

      // Use os dados gerados para registrar o usuário
      cy.window()
        .its('store')
        .invoke(
          'dispatch',
          register({ name: user.name, email: user.email, password: user.password })
        );

      cy.window()
        .its('store')
        .invoke('dispatch', createProfile({ status: 'QA Júnior', skills: 'Cypress, Selenium' }));
    });
  });

  afterEach(() => {
    cy.get('body').then(($body) => {
      if ($body.find('[data-test="navbar-dashboard"]').length) {
        cy.get('[data-test="navbar-dashboard"]').click();
      }
      if ($body.find('[data-test="dashboard-deleteProfile"]').length) {
        cy.get('[data-test="dashboard-deleteProfile"]').click();
      }
    });
  });

  it('Validar cadastro com sucesso', () => {
    cy.get('[data-test="dashboard-welcome"]').should('contain.text', user.name);
  });

  it('Validar login com sucesso', () => {
    cy.get('[data-test="navbar-logout"]').click();

    // Chama App Action de login
    cy.window().its('store').invoke('dispatch', login(user.email, user.password));

    // Aguarda o redirecionamento para /dashboard
    cy.url({ timeout: 10000 }).should('include', '/dashboard');

    cy.get('[data-test="dashboard-welcome"]', { timeout: 10000 }).should('contain.text', user.name);
  });
});
