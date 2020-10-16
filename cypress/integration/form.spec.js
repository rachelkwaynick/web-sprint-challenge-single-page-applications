describe('Pizza App', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const inputName = () => cy.get('input[name="name"]')
    const sauceInput = () => cy.get('[type="radio"]')
    const selectInput = () => cy.get('select')
    const pepTopping = () => cy.get('input[name="pepperoni"]')
    const sausageTopping = () => cy.get('input[name="sausage"]')
    const canTopping = () => cy.get('input[name="canadian"]')
    const spicyTopping = () => cy.get('input[name="spicySausage"]')
    const submitBtn = () => cy.get('#submitBtn')

    it('add text to the box', () => {
        inputName()
            .should('exist')
            .should('have.value', '')
            .type('Name')
            .should('have.value', 'Name')
            .clear()
    })

    it('select multiple toppings', () => {
        pepTopping()
            .should('exist')
            .should('not.be.checked')
            .check()
            .should('be.checked')
        
        sausageTopping()
            .should('exist')
            .should('not.be.checked')
            .check()
            .should('be.checked')
        
        canTopping()
            .should('exist')
            .should('not.be.checked')
            .check()
            .should('be.checked')
        
        spicyTopping()
            .should('exist')
            .should('not.be.checked')
            .check()
            .should('be.checked')
        
        pepTopping()
            .uncheck()
        sausageTopping()
            .uncheck()
        canTopping()
            .uncheck()
        spicyTopping()
            .uncheck()
    })

    it('submit form', () => {
        inputName()
            .type('Name')

        selectInput()
            .select('small')
            .should('have.value', 'small')
        
        sauceInput()
            .first()
            .check()
            .should('have.value', 'originalRed')
        
        submitBtn().click()
    })
})