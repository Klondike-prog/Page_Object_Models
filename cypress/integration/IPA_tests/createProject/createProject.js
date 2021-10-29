const button = ".p-button"
const dataArea= ".p-inputtext"
const buttonDel=".p-button-label"
const popup=".p-confirm-popup-message"


export default class createProject {
    static NewProjectButton() {
        cy.wait(3000)
        cy.get(".project-card.new-project").contains("New Project").click()

    }
    static fillDataProject() {
        cy.fixture("fillData").then(content=> {
            cy.wait(3000)
            cy.get(dataArea).eq(0).clear()
            cy.get(dataArea).eq(0).type(content.projectName, {
                delay: 100
            })
            cy.get(dataArea).eq(1).clear()
            cy.get(dataArea).eq(1).type(content.projectTag, {
                delay: 100
            })
        })
       
    }
    static createProjectButton() {
        cy.wait(3000)
        cy.get(button).contains("Create").click()

    }
    static deleteProjectButton() {
        cy.wait(10000)
        cy.get(button).contains("Delete Project").click()
        cy.wait(1000)
    }

    static deleteProjectConfirmation() {
        cy.wait(1000)
        cy.get(popup).should("be.visible")
        cy.wait(1000)
        cy.get(buttonDel).contains("Delete").click()
    }
}
