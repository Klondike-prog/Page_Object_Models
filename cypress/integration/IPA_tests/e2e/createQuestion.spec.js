import LoginPage from '../../IPA_tests/Login/LoginPage';
import AddStage from '../../IPA_tests/createStage/createStage'
import AddQuestion from '../../IPA_tests/createQuestion/createQuestion'

describe("Access platform and login", () => {
    //Load the website using cookie key
    it("should load Internship Portal website with login credentials", () => { //Access platform with login credentials
        LoginPage.visitPage();
        LoginPage.LogIn();
        LoginPage.validateProject();

    })

    //Interact with star now button to view project details
    it("Should click on Start Now", () => {
        LoginPage.loadProject();
    })
})



describe("Creating a new stage", () => {
    //Input on  the new stage
    it("should click on New Stage button", () => {
        AddStage.createStage();
    })
    //Input details for stage name
    it("should fil New stage name ", () => {
        AddStage.fillDataStageName();
    })
    //Input details for stage points
    it("should fill points ", () => {
        AddStage.fillDataStagePoints();
    })
    //Interact with save button to keep our inputs 
    it("should click on Save button", () => {

        AddStage.saveStage();
    })
    //Validate our new stage is created
    it("Should load new stage created ", () => { //Validate new stage created.
        AddStage.validateStage();

    })
    //Clean up after our work, deleting a stage
    


})
//Create a new question describe section
describe("Creating a new  question", () => {
    //Interact with the add question button
    it("Should click on Add New Question button", () => {
        AddQuestion.createQuestion()
    })
    //Input details for question field
    it("should fil Question field ", () => {

        AddQuestion.fillDataQuestion()


    })
    //Input details for answer field
    it("should fil answer field ", () => {

        AddQuestion.fillDataAnswer()
    })
    //Input details for solution field 
    it("should fil solution field ", () => {

        AddQuestion.fillDataSolution()

    })
    //Save the input details for question fields
    it("should click Update to save", () => {

        AddQuestion.saveQuestion()
    })
    //Clean up the questions
    it("should click on delete question", () => {
        AddQuestion.deleteQuestion()
    })
    //Clean up after our work, delete the stage
    it("should delete a stage", () => {
        AddStage.deleteStage()
    })

})