
describe('Home page', () => {

    beforeEach(() => {
       
        cy.visit('/');
        cy.get(':nth-child(4) > .header-container > .login-container > .btn-register').click()
        cy.get('.toast__close-button > svg').click()
    });

    it('Register user', () => {

        cy.get('[name="email"]').type('yanyeline@gmail.com', { force: true })
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

        cy.get('.ui').contains('Registrarme').click({ force: true })


        //cy.get('h1').should('have.text', 'Confirma la cuenta')
        //cy.get('h1').invoke('text').then((text) => { expect(text).to.eq('Confirma la cuenta')})

    })

    it('Required fields', () => {

        cy.get('[name="email"]').type('yanyeline@gmail.com', { force: true })
        cy.get('.field > .ui > .dropdown').click({ force: true })
        cy.get('.ui > .visible > :nth-child(2)').click({ force: true })
        cy.get('.ui').contains('Registrarme').click({ force: true })

        cy.get('.red').invoke('text').then((text) => { expect(text).to.eq('Los campos resaltados son obligatorios.') })

    })

    it('Existing mail', () => {

        cy.get('[name="email"]').type('prueba@gmail.com', { force: true })
        cy.get('.field > .ui > .dropdown').click({ force: true })
        cy.get('.ui > .visible > :nth-child(2)').click({ force: true })
        cy.get('.ui').contains('Registrarme').click({ force: true })

        cy.get('div:nth-of-type(1) > .mb-input > .error-message').invoke('text').then((text) => { expect(text.trim()).to.eq('El correo ingresado ya está registrado.') })

    })

});
