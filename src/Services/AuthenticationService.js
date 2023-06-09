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

    static deleteProject()
    {
        return  AxiosService.deleteProject(AuthenticationConfiguration.deleteProject());
    }

    static createIssue(data)
    {
        return AxiosService.createIssue(AuthenticationConfiguration.createIssue() , data);
    }

    static allIssues()
    {
        return AxiosService.allIssues(AuthenticationConfiguration.allIssues());
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
        return AxiosService.updateUsers(AuthenticationConfiguration.updateUser() , data);
    }

    static deleteUser()
    {
        return AxiosService.deleteUser(AuthenticationConfiguration.deleteUser());
    }

    static teamDetails()
    {
        return AxiosService.teamDetails(AuthenticationConfiguration.teamDetails());
    }

    static getDataForIssues()
    {
        return AxiosService.getDataForIssues(AuthenticationConfiguration.getDataForIssues());
    }
}