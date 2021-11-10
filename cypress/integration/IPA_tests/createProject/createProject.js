import {button,dataAreaProject,buttonDelProject,popupDelProject,cardProject,time} from "../../Content_Selectors/const"



 class Project {
     //Validate and interact with New Project button to create a new project.
    static NewProjectButton() {
        cy.wait(time)
        cy.contains(cardProject,"New Project").should("be.visible")
        cy.contains(cardProject,"New Project").click()

    }
    //Input valid data in  new project text fields
    static fillDataProject() {
        cy.fixture("fillData").then(content=> {
            cy.wait(time)
            cy.get(dataAreaProject).eq(0).clear().type(content.projectName, {   //Input first valid data field
                delay: 100
            })
            cy.get(dataAreaProject).eq(1).clear().type(content.projectTag, {  //Input second valid data field
                delay: 100
            })
        })
       
    }
    //Interact with Create button as final step to create a new project
    static createProjectButton() {
        cy.wait(time)
        cy.get(button).contains("Create").click()

    }
    //Delete new project created 
    static deleteProjectButton() {
        cy.wait(time)
        cy.get(button).contains("Delete Project").click()
    }
    // Interact with popup for delete confirmation of the project
    static deleteProjectConfirmation() {
        cy.wait(time)
        cy.get(popupDelProject).should("be.visible")
        cy.get(buttonDelProject).contains("Delete").click()
    }
} export default Project
