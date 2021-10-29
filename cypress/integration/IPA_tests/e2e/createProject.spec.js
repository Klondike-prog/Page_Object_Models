import createProject from '../../IPA_tests/createProject/createProject';
import LoginPage from '../../IPA_tests/Login/LoginPage';

describe("Create new Project", () => {
    //Load the website using cookie key
    it("should load Internship Portal website with login credentials", () => { //Access platform with login credentials
       LoginPage.visitPage();
       LoginPage.LogIn();
       LoginPage.validateProject();
      
    })
    //Interact with new project button 
    it("Should click on New project button", () => {
       createProject.NewProjectButton();
    })

    //Interact with input fields to create the project
    it("Should fill Project name and Project topics", () => {
       createProject.fillDataProject();

    })

    //Interact with create button to create the project
    it("Should click Create button", () => {
       createProject.createProjectButton();

    })

    //Clean up after our work, deleting a project
    
    
    it("Should delete project", () => {
      createProject.deleteProjectButton();
   })
   //Validate that our pop-up for delete is present and delete the project
    it("Should display pop-up confirmation massage", () => {
        createProject.deleteProjectConfirmation();
    })
    




})