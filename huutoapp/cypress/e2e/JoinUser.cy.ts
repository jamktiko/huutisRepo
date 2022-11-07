describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
  });

  it('Input room code to field', () => {
    cy.visit('http://localhost:4200/etusivu');
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('#input1').type('4');
    cy.get('#input2').type('0');
    cy.get('#input3').type('9');
    cy.get('#input4').type('8');
  });

  it('Join room after inputting room code and input name afterwards', () => {
    cy.contains('Join').click();

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get('.input-2').type('Testaaja');

    cy.wait(3000);
  });

  it('Join room and vote', () => {
    cy.wait(2000);

    cy.get('.grid-rows-4 > .grid').click();

    cy.wait(2000);

    cy.get(':nth-child(2) > .button-2').click();
  });

  it('See results and return to frontpage', () => {
    cy.wait(5000);

    cy.get('.button-1').click();
  });
});
