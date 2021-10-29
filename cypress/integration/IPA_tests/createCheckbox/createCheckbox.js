const container = ".question-container div"
const button = ".p-button"
const area = ".p-inputtextarea"

class AddCheckbox {
    static createQuestionCb() {
        cy.wait(3000)

        cy.get(".stage").contains("Hi I am a new stage").click()
        cy.get(".stage-editor-header").contains("Hi I am a new stage")
        cy.get(button).contains("Add checkbox Question").click()



    }
    static fillDataQuestionCb() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Question:").find(area).clear().type(content.checkboxQuestion, {
                delay: 100
            })
        })
       
    }
    static fillDataAnswerCb() {
        cy.fixture("fillData").then(content=>{
        cy.contains(container, "Possible answers:").find(area).clear().type(content.checkboxAnswer, {
            delay: 100
        })
    })
    }
    static markCheckbox(){
        cy.get(".checkbox-label").click({
            multiple: true
        }) //interacting with checkbox
    }
   
   

}
export default AddCheckbox