import AuthenticationConfiguration from "../Configurations/AuthenticationConfiguration";
import AxiosService from "./AxiosService";

export default class AuthenticationService 
{
    static SignIn(data)
    {
      console.log("SignIn : " + AuthenticationConfiguration.SignIn());
      return AxiosService.Post(AuthenticationConfiguration.SignIn(), data);
    }

    static SignUp(data)
    {
        return AxiosService.SignUp(AuthenticationConfiguration.SignUp(), data);
    }

    static createProject(data)
    {
        return AxiosService.createProject(AuthenticationConfiguration.createProject() , data);
    }

    static allProjects()
    {
        return AxiosService.allProjects(AuthenticationConfiguration.allProjects());
    }

    static projectExplore()
    {
        return AxiosService.projectExplore(AuthenticationConfiguration.projectExplore());
    }

    static createIssue(data)
    {
        return AxiosService.createIssue(AuthenticationConfiguration.createIssue() , data);
    }
}