
describe('Home page', () => {

    beforeEach(() => {
        //cy.wait(1000)
        cy.visit('/');
    });

    it('Register user', () => {

        cy.get(':nth-child(4) > .header-container > .login-container > .btn-register').click()
        cy.get('.toast__close-button > svg').click()
        cy.get(':nth-child(1) > .field > .ui > input').type('yanyeline@gmail.com')
        cy.get('.field > .ui > .dropdown').click({ force: true })
        cy.get('.ui > .visible > :nth-child(2)').click({ force: true })

        cy.get('[name="documentNumber"]').scrollIntoView()

        cy.get('[name="documentNumber"]').type('1152712932', { force: true })
        cy.get('[name="name"]').type('Yanyeline', { force: true })
        cy.get('[name="lastName"]').type('Bueno', { force: true })
        cy.get('[name="cellPhone"]').type('3113162751', { force: true })
        cy.get('[name="phone"]').type('5878859', { force: true })
        cy.get('[name="position"]').type('QA', { force: true })

        cy.wait(500);
        
        cy.get('iframe[src*=recaptcha]')
        .its('0.contentDocument')
        .should(d => d.getElementById('recaptcha-token').click())

        
    })



});
