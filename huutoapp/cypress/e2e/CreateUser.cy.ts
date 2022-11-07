describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
  });

  it('Click create room button ', () => {
    cy.visit('http://localhost:4200/etusivu');
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,

    cy.wait(2000);

    cy.get('[routerlink="/creation"]').click();
  });

  it('Join creation page and input question, format and choices', () => {
    cy.get('.ng-invalid').type('Toimiiko cypress E2E');

    cy.wait(2000);

    cy.wait(2000);

    cy.get(':nth-child(8) > .input-2').type('Toimii hyvin');

    cy.wait(1000);

    cy.get('[type="submit"] > .w-12').click();

    cy.get(':nth-child(9) > .input-2').type('Ei toimi');

    cy.wait(1000);

    cy.get('[type="submit"] > .w-12').click();

    cy.get(':nth-child(10) > .input-2').type('Toimii jotenkin');
  });

  it('Create room and input username', () => {
    cy.wait(2000);

    cy.get('[routerlink="/user"]').click();

    cy.wait(1000);

    cy.get('.input-2').type('RoomCreator');

    cy.wait(2000);

    cy.get('.grid-rows-4 > .grid').click();
  });

  it('See results and return to frontpage', () => {
    cy.wait(2000);

    cy.get(':nth-child(2) > .button-2').click();

    cy.wait(5000);

    cy.get('.button-1').click();
  });
});
