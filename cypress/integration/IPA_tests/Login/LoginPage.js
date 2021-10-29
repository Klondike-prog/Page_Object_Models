const URL = "https://accesa-internship-portal.web.app/"
const button =".p-button"

export default class LoginPage {
    static visitPage() {

        cy.visit(URL, {
            timeout: 100000
        }) //load URL
        cy.url().should("include", "accesa-internship-portal") //assertion
        cy.log("Website Loaded") // cypress logs
    }

    static LogIn() {
        cy.login()
    }
    static validateProject() {
        cy.get("h4").contains("Bondane_Catalin_Test").should("be.visible")
    }
    static loadProject() {
        cy.wait(3000)
        cy.get(button).contains("Start Now").click()
    }
   
}
