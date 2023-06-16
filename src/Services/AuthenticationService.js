import AuthenticationConfiguration from "../Configurations/AuthenticationConfiguration";
import AxiosService from "./AxiosService";

export default class AuthenticationService 
{
    static signIn(data)
    {
      //console.log("SignIn : " + AuthenticationConfiguration.SignIn());
      return AxiosService.signIn(AuthenticationConfiguration.SignIn(), data);
    }

    static signUp(data)
    {
        return AxiosService.SignUp(AuthenticationConfiguration.signUp(), data);
    }

    static createProject(data)
    {
        return AxiosService.createProject(AuthenticationConfiguration.createProject() , data);
    }

    static allProjects(data)
    {
        return AxiosService.allProjects(AuthenticationConfiguration.allProjects(),data);
    }

    static projectExplore(data)
    {
        return AxiosService.projectExplore(AuthenticationConfiguration.projectExplore(),data);
    }

    static updateProject(data)
    {
        return AxiosService.updateProject(AuthenticationConfiguration.updateProject(),data);
    }

    static deleteProject(data)
    {
        return  AxiosService.deleteProject(AuthenticationConfiguration.deleteProject(),data);
    }

    static createIssue(data)
    {
        return AxiosService.createIssue(AuthenticationConfiguration.createIssue() , data);
    }

    static allIssues(data)
    {
        return AxiosService.allIssues(AuthenticationConfiguration.allIssues(),data);
    }

    static perticularIssueDetails()
    {
        return AxiosService.perticularIssueDetails(AuthenticationConfiguration.perticularIssueDetails());
    }

    static updateIssues(data)
    {
        return AxiosService.updateIssue(AuthenticationConfiguration.updateIssue(), data);
    }

    static deleteIssue()
    {
        return AxiosService.deleteIssue(AuthenticationConfiguration.deleteIssue());
    }

    static allUsersTable()
    {
        return AxiosService.allUsersTable(AuthenticationConfiguration.allUsers());
    }
    

    static updateUser(data)
    {
        return AxiosService.updateUsers(AuthenticationConfiguration.updateUser(),data);
    }
    static getUser(data)
    {
        return AxiosService.getUser(AuthenticationConfiguration.getUser(),data);
    }

    static deleteUser(data)
    {
        return AxiosService.deleteUser(AuthenticationConfiguration.deleteUser(),data);
    }

    static getDataForIssues()
    {
        return AxiosService.getDataForIssues(AuthenticationConfiguration.getDataForIssues());
    }

    static addworkflow(data)
    {
        console.log(data);
        return AxiosService.addWorkflow(AuthenticationConfiguration.addWorkflow() , data);

    }

    static getWorkFlow()
    {
        return AxiosService.getAllWorkflows(AuthenticationConfiguration.getAllWorkFlows());
    }
    static getWorkflowByName(data){
        return AxiosService.getWorkflowByName(AuthenticationConfiguration.getWorkflowByName(),data);
    }

    static assignWorkflow(data){
        console.log(data);
        return AxiosService.assignWorkflow(AuthenticationConfiguration.assignWorkflow(),data);
    }

    static projectWiseWorkflow(data){
        console.log(data);
        return AxiosService.projectWiseWorkflow(AuthenticationConfiguration.projectWiseWorkflow(),data);
    }

    static assignMember(data)
    {
        return AxiosService.assignMember(AuthenticationConfiguration.assignMember(),data);
    }

    static teamDetails(data)
    {
        return AxiosService.teamDetails(AuthenticationConfiguration.teamDetails(),data);
    }

    static postComment(data)
    {
        return AxiosService.postComments(AuthenticationConfiguration.postComment(),data);
    }

    static deleteComment(data)
    {
        return AxiosService.deleteComment(AuthenticationConfiguration.deleteComment(),data);
    }

    static editComment(data)
    {
        return AxiosService.editComment(AuthenticationConfiguration.editComment(),data);
    }

    static allComment(data)
    {
        return AxiosService.allComment(AuthenticationConfiguration.allComment(),data);
    }

    static getUserDetailByID(data)
    {
        return AxiosService.getUserDetailByID(AuthenticationConfiguration.getUserDetailByID(),data);
    }

    static createTask(data)
    {
        return AxiosService.createTask(AuthenticationConfiguration.createTask(),data);
    }

    static createDefect(data)
    {
        return AxiosService.createDefect(AuthenticationConfiguration.createDefect(),data);
    }

    static allIssuesNew(data)
    {
        return AxiosService.allIssuesNew(AuthenticationConfiguration.allIssuesNew(),data);
    }

    static getAllEmails(data)
    {
        return AxiosService.getAllEmails(AuthenticationConfiguration.getAllEmails(),data);
    }
}