const container = ".question-container div"
const button = ".p-button"
const area = ".p-inputtextarea"

class AddQuestion {
    static createQuestion() {
        cy.wait(3000)

        cy.get(".stage").contains("Hi I am a new stage").click()
        cy.get(".stage-editor-header").contains("Hi I am a new stage")
        cy.get(button).contains("New Question").click()


    }
    static fillDataQuestion() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Question:").find(area).clear().type(content.normalQuestion, {
                delay: 100
            })
        })
       
    }
    static fillDataAnswer() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Answer template:").find(area).clear().type(content.normalAnswer, {
                delay: 100
            })
        })
        
    }
    static fillDataSolution() {
        cy.fixture("fillData").then(content=>{
            cy.contains(container, "Solution:").find(area).clear().type(content.normalSolution, {
                delay: 100
            })
        })
       
    }

    static saveQuestion() {
        cy.get(button).contains("Update Question").click()

    }

    static deleteQuestion() {
        cy.wait(3000)
        cy.get(button).contains("Delete Question").click()
    }

}
export default AddQuestion