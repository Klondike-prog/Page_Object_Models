import LoginPage from '../../IPA_tests/Login/LoginPage';
import AddStage from '../../IPA_tests/createStage/createStage'
import AddCheckbox from '../../IPA_tests/createCheckbox/createCheckbox'
import AddQuestion from '../../IPA_tests/createQuestion/createQuestion'


describe("Access platform and login", () => {
    //Load the website using cookie key
    it("should load Internship Portal website with login credentials", () => { //Access platform with login credentials
        LoginPage.LogIn(); 
        LoginPage.visitPage();
         LoginPage.validateLogIn();
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

//Create a new checkbox question
describe("Creating a new checkbox question", () => {
    //Interact with new question button to show input fields
    it("Should click on New Question button", () => {
      AddCheckbox.createQuestionCb()

    })
    //Input details about question fields
    it("should fil Question field ", () => {

       AddCheckbox.fillDataQuestionCb()
    })
    //Input details about answer fields
    it("should answer field ", () => {

       AddCheckbox.fillDataAnswerCb()

    })
    //Validate our checkbox is working
    it("should mark checkbox answer", () => {
    AddCheckbox.markCheckbox()
    })

    //Interact with update button to save input details
    it("should click Update to save", () => {
       AddQuestion.saveQuestion()
    })
    //Clean up after our work, delete a question
    it("should click on delete question", () => {
        AddQuestion.deleteQuestion()
    })
    //Clean up after our work, delete a stage
    it("should delete a stage", () => {
       AddStage.deleteStage()
    })
})