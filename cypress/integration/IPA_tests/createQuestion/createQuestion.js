import {button,container,textArea,time,stage,stageEditor} from "../../Content_Selectors/const"

class Question {
    //Interact with new question button to create a new question
    static createQuestion() {
        cy.wait(time)

        cy.get(stage).contains("Hi I am a new stage").click()
        cy.get(stageEditor).contains("Hi I am a new stage")
        cy.get(button).contains("New Question").click()


    }
    //Fill valid data to input question field
    static fillDataQuestion() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Question:").find(textArea).clear().type(content.normalQuestion, {
                delay: 100
            })
        })
       
    }
    //Fill valid data to input answer field
    static fillDataAnswer() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Answer template:").find(textArea).clear().type(content.normalAnswer, {
                delay: 100
            })
        })
        
    }
    //Fill valid data to input solution field
    static fillDataSolution() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Solution:").find(textArea).clear().type(content.normalSolution, {
                delay: 100
            })
        })
       
    }
    //Interact with update button to save Question fields
    static saveQuestion() {
        cy.get(button).contains("Update Question").click()

    }
    //Delete Question from stage
    static deleteQuestion() {
        cy.wait(time)
        cy.get(button).contains("Delete Question").click()
    }

}
export default Question