import baseLogin from "../../support/PageObject/loginPage.cy.js"
const loginData = require("../../fixtures/OrangeHRM/logininput.json")

describe('Login', () => {
  const BaseLogin = new baseLogin()

  it('success login', () => {
    BaseLogin.visitPage()
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    BaseLogin.inputUsername()
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    BaseLogin.inputPassword()
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    BaseLogin.clickLogin()
    //cy.get('.oxd-button').click()
    BaseLogin.validatePageDashboard()
    //cy.get(':nth-child(5) > .oxd-main-menu-item').should('be.visible')
   
  })

  it('failed login username', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginData.validPassword)
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('be.visible')
    cy.get('.oxd-alert-content > .oxd-text').should('contain.text','Invalid credentials')
   
  })

  it('failed login password', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginData.validUser)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginData.salahPassword)
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('be.visible')
    cy.get('.oxd-alert-content > .oxd-text').should('contain.text','Invalid credentials')
   
  })

  it('failed login username and password', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginData.salahUser)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginData.salahPassword)
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('be.visible')
    cy.get('.oxd-alert-content > .oxd-text').should('contain.text','Invalid credentials')
   
  })

  it('failed login blank username and password', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type.blank
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type.blank
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('contain.text','Require')
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('contain.text','Require')
   
  })
  //it.only - untuk run 1 case saja
})