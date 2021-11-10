import {stageButton,stageSaveButton,stageTextArea,time,stage,stageDelButton,stageSelector} from "../../Content_Selectors/const"
class Stage {
    //Interact with new stage button
    static createStage() {
        // cy.wait(time)
        cy.contains(stageButton,"New Stage").click()
    }
    //Fill valid data to input stage name
    static fillDataStageName() {
        cy.fixture("fillData").then(content=>{
            // cy.wait(time)
            cy.get(stageTextArea).eq(1).clear().type(content.stageName, {
                delay: 100
            });
        })
    }
    //Fill valid data to input stage points
    static fillDataStagePoints() {
        cy.fixture("fillData").then(content=>{
            cy.get(stageTextArea).eq(2).clear().type(content.stagePoints, {
                delay: 100
            })
        })  
    }
    //Interact with save button to save stage
    static saveStage() {
        cy.get(stageSaveButton).contains("Save").click()

    }
    //Validate the created stage is present
    static validateStage() {
        cy.wait(time)
        cy.get(stage).contains("(100p) Hi I am a new stage")
        cy.get(stageSelector).its("length").should("eq", 1) //Validate we created one single stage at the moment.
    }
    //Delete new stage created
    static deleteStage() {
        // cy.wait(time)
        cy.get(stageDelButton).eq(1).click()
    }
}
export default Stage