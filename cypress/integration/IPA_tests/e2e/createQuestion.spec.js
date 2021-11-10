import LoginPage from '../../IPA_tests/Login/LoginPage';
import Stage     from '../../IPA_tests/createStage/createStage'
import Question  from '../../IPA_tests/createQuestion/createQuestion'
import Project   from '../../IPA_tests/createProject/createProject'

describe("Access platform and login", () => {
    //Load the website using cookie key
    it("should load Internship Portal website with login credentials", () => { //Access platform with login credentials
        LoginPage.LogIn(); 
        LoginPage.visitPage();
        LoginPage.validateLogIn();
    })
})

describe("Creating a new project", () => {
    //Interact with create project button
    it("Should click on Create Project button", () => {
        Project.NewProjectButton();
    })
    //Fill data to input project name and tags
    it("Should fill Project name and Project topics", () => {
        Project.fillDataProject();
    })
    //Interact with create button to create the project
    it("Should click Create button", () => {
        Project.createProjectButton();
    })
})


describe("Creating a new stage", () => {
    //Input on  the new stage
    it("should click on New Stage button", () => {
        Stage.createStage();
    })
    //Input details for stage name
    it("should fil New stage name ", () => {
        Stage.fillDataStageName();
    })
    //Input details for stage points
    it("should fill points ", () => {
        Stage.fillDataStagePoints();
    })
    //Interact with save button to keep our inputs 
    it("should click on Save button", () => {
        Stage.saveStage();
    })
    //Validate our new stage is created
    it("Should load new stage created ", () => { //Validate new stage created.
        Stage.validateStage();
    })
})

describe("Creating a new  question", () => {
    //Interact with the add question button
    it("Should click on Add New Question button", () => {
        Question.createQuestion()
    })
    //Input details for question field
    it("should fil Question field ", () => {
        Question.fillDataQuestion()
    })
    //Input details for answer field
    it("should fil answer field ", () => {
        Question.fillDataAnswer()
    })
    //Input details for solution field 
    it("should fil solution field ", () => {
        Question.fillDataSolution()
    })
    //Save the input details for question fields
    it("should click Update to save", () => {
        Question.saveQuestion()
    })
    //Clean up the questions
    it("should click on delete question", () => {
        Question.deleteQuestion()
    })
    
describe("Should delete question, stage, project", () => {
    //Clean up after our work, delete a stage
    it("should delete a stage", () => {
        Stage.deleteStage()
    })
    //Clean up after our work, delete a project
    it("Should delete project", () => {
        Project.deleteProjectButton();
    })
    //Validate that our pop-up for delete is present and delete the project
    it("Should display pop-up confirmation massage", () => {
        Project.deleteProjectConfirmation();
    })
    })
})