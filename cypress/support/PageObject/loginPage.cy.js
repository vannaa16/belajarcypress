const loginData = require("../../fixtures/OrangeHRM/logininput.json")

class baseLogin {
    username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButton = '.oxd-button'
    pageDashboard = ':nth-child(5) > .oxd-main-menu-item'
    userDropdown = '.oxd-userdropdown-tab'
    logoutButton = ':nth-child(4) > .oxd-userdropdown-link'
    admin = ':nth-child(1) > .oxd-main-menu-item > .oxd-text'
    inputUser = ':nth-child(2) > .oxd-input'

    inputUsername(){
        //cy.get(this.username).type(loginData.validUser)
        cy.ketik(this.username,loginData.validUser)
    }
    inputPassword(){
        cy.get(this.password).type('admin123')

    }
    clickLogin(){
        //cy.get(this.loginButton).click()
        cy.klik(this.loginButton)
    }

    validatePageDashboard(){
        cy.get(this.pageDashboard).should('be.visible')
    }
    visitPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    clickLogout(){
        cy.klik(this.logoutButton)
    }

    clickUserDropdown(){
        cy.klik(this.userDropdown)
    }

    validateSuccessLogout(){
        cy.url('contains','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    
    clickAdminMenu(){
        cy.klik(this.admin)
    }

    searchUsername(){
        cy.get(this.inputUser).type('Admin')

    }

 

}
export default baseLogin;