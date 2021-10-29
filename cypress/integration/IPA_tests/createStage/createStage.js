const dataArea=".p-inputtext"
class AddStage {
    static createStage() {
        cy.wait(2000)
        cy.get(".p-button.p-component.rnd-btn").contains("New Stage").click()

    }
    static fillDataStageName() {
        cy.fixture("fillData").then(content=>{
            cy.wait(2000)
            cy.get(dataArea).eq(1).clear()
            cy.get(dataArea).eq(1).type(content.stageName, {
                delay: 100
            });
        })
      
    }
    static fillDataStagePoints() {
        cy.fixture("fillData").then(content=>{
            cy.get(dataArea).eq(2).clear()
            cy.get(dataArea).eq(2).type(content.stagePoints, {
                delay: 100
            })
        })
       
    }

    static saveStage() {
        cy.get(".p-button-label").contains("Save").click()

    }
    static validateStage() {
        cy.wait(3000)
        cy.get(".stage").contains("(100p) Hi I am a new stage")
        cy.get(".stage-selector").its("length").should("eq", 1)
    }
    static deleteStage() {
        cy.wait(5000)
        cy.get(".p-button span.pi").eq(1).click()
    }
}
export default AddStage