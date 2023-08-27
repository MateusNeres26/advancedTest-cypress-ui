/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
const cadastro = require('../../support/pages/cadastro.page')
const { confirmScreen } = require('../../support/pages/confirmScreen.page')

it('Deve realizar cadastro com sucesso', () => {

    cy.visit('/minha-conta')
    let emailFaker = faker.internet.email()
    let passFaker = faker.internet.password()
    let nomeFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()

    cadastro.cadastroPre(emailFaker, passFaker, nomeFaker, sobrenomeFaker)
    confirmScreen.minhaConta.should("be.visible")
    confirmScreen.minhaConta.should('contain', 'Detalhes da conta modificados com sucesso.')
})
