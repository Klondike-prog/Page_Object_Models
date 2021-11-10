import {button,container,textArea,labelCheckbox,time,stage,stageEditor} from "../../Content_Selectors/const"

class Checkbox {
    //Create a checkbox question with default inputs 
    static createQuestionCb() {
        cy.wait(time)

        cy.get(stage).contains("Hi I am a new stage").click()            //Access stage for checkbox question        
        cy.get(stageEditor).contains("Hi I am a new stage")      //Validate stage for creating a checkbox question
        cy.get(button).contains("Add checkbox Question").click()
    }
    // Input default data into checkbox question field
    static fillDataQuestionCb() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Question:").find(textArea).clear().type(content.checkboxQuestion, {
                delay: 100
            })
        })    
    }
    // Input default data into checkbox question field
    static fillDataAnswerCb() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Possible answers:").find(textArea).clear().type(content.checkboxAnswer, {
                delay: 100
            })
        })
    }
    //interacting with checkbox
    static markCheckbox(){
        cy.get(labelCheckbox).click({
            multiple: true
        }) 
    }
}
export default Checkbox