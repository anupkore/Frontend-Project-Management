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

    static particularIssueDetails(data)
    {
        return AxiosService.particularIssueDetails(AuthenticationConfiguration.particularIssueDetails(),data);
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
    static getAllProjectMember(data){
        return AxiosService.getAllProjectMember(AuthenticationConfiguration.getAllProjectMember(),data);
    }
    static updateIssueState(data){
        return AxiosService.updateIssueState(AuthenticationConfiguration.updateIssueState(),data);
    }
    static assignMemberToIssue(data){
        return AxiosService.assignMemberToIssue(AuthenticationConfiguration.assignMemberToIssue(),data);
    }
    static updateTaskDescription(data){
        return AxiosService.updateTaskDescription(AuthenticationConfiguration.updateTaskDescription(),data);
    }
    static updateDefectDescription(data){
        return AxiosService.updateDefectDescription(AuthenticationConfiguration.updateDefectDescription(),data);
    }
    static userWiseIssues(data){
        return AxiosService.userWiseIssues(AuthenticationConfiguration.userWiseIssues(),data);
    }
    static IssueByWeek(data)
    {
        return AxiosService.IssueByWeek(AuthenticationConfiguration.IssueByWeek(),data);
    }
    static IssueByMonth(data)
    {
        return AxiosService.IssueByMonth(AuthenticationConfiguration.IssueByMonth(),data);
    }
    static IssueByQuarter(data)
    {
        return AxiosService.IssueByQuarter(AuthenticationConfiguration.IssueByQuarter(),data);
    }
    static IssueByDaily(data)
    {
        return AxiosService.IssueByDaily(AuthenticationConfiguration.IssueByDaily(),data);
    }
    static DetailedIssue()
    {
        return AxiosService.DetailedIssue(AuthenticationConfiguration.DetailedIssue());
    }
// <<<<<<< HEAD
    static addStatus(data)
    {
        return AxiosService.addStatus(AuthenticationConfiguration.addStatus(),data);
    }
    static update_status(data)
    {
        return AxiosService.update_status(AuthenticationConfiguration.update_status(),data);
    }
    static status_display(data)
    {
        return AxiosService.status_display(AuthenticationConfiguration.status_display(),data);
// =======
    }

    static updateDefect(data)
    {
        return AxiosService.updateDefect(AuthenticationConfiguration.updateDefect(),data);
    }

    static deleteDefect(data)
    {
        return AxiosService.deleteDefect(AuthenticationConfiguration.deleteDefect(),data);
    }

    static updateTask(data)
    {
        return AxiosService.updateDefect(AuthenticationConfiguration.updateTask(),data);
    }

    static deleteTask(data)
    {
        return AxiosService.deleteDefect(AuthenticationConfiguration.deleteTask(),data);
// >>>>>>> ac425c014f2670b49dc681d816ef9756c760900b
    }
}