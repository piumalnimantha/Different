/// <reference types = "cypress" />


it('Text box test', function(){

    cy.visit('https://demoqa.com/elements')

    cy.get('#item-0').click()

    cy.get('#userName').type('W G P N Rathnayaka')
    cy.get('#userEmail').type('piumalnimantha1996@gmail.com')
    cy.get('#currentAddress').type('Minuwangoda')
    cy.get('#permanentAddress').type('Minuwangoda')

    cy.get('#submit').click()

    cy.get('#name').should('have.value', 'W G P N Rathnayaka')
    cy.get('#email').should('have.value', 'piumalnimantha1996@gmail.com')
    cy.get('#currentAddress').should('have.value', 'Minuwangoda')
    cy.get('#permanentAddress').should('have.value', 'Minuwangoda')


})

it('Check Box', function(){

    cy.get('#item-1').click()

    cy.get('label').click()
 
    cy.get('.tree-node-home').should('be.checked')

})

it('Radio button', function(){

    cy.get('#item-2').click()

    cy.get('.impressiveRadio').check()
    //cy.get('[type="radio"]').check('like')

})

it('check button', function(){

    cy.get('#item-4').click()

    cy.get('#doubleClickBtn').dblclick()

    cy.get('#rightClickBtn').rightclick()

    cy.get('#S1Z4C').click()

})

