import ParentConfiguration from "./ParentConfiguration";

export default class AuthenticationConfiguration
{
    static SignIn()
    {
        const url2 = ParentConfiguration.parentURL()+"login";
        console.log(url2);
        return url2;
    }

    static signUp()
    {
        const url = ParentConfiguration.parentURL()+"add_user";
        return url;
    }

    static createProject()
    {
        const url = ParentConfiguration.parentURL()+"create_project"
        return url;
    }

    static allProjects()
    {
        const url = ParentConfiguration.parentURL()+"ProjectList";
        return url;
    }

    static projectExplore()
    {
        const url = ParentConfiguration.parentURL()+"completeProjectdetails";
        return url;
    }

    static updateProject()
    {
        const url = ParentConfiguration.parentURL()+"updateProject";
        return url ;
    }

    static deleteProject()
    {
        const url = ParentConfiguration.parentURL()+"deleteProject";
        return url;
    }

    static createIssue()
    {
        const url = ParentConfiguration.parentURL()+"create_issue";
        return url;
    }

    static allIssues()
    {
        const url = ParentConfiguration.parentURL()+"allIssues";
        return url;
    }

    static perticularIssueDetails()
    {
        const url = ParentConfiguration.parentURL()+"perticularIssue";
        return url ;
    }

    static updateIssue()
    {
        const url = ParentConfiguration.parentURL()+"updateIssue";
        return url ;
    }

    static deleteIssue()
    {
        const url = ParentConfiguration.parentURL()+"deleteIssue";
        return url;
    }

    static allUsers()
    {
        const url = ParentConfiguration.parentURL()+"show_user";
        return url ;
    }

    static updateUser()
    {
        const url = ParentConfiguration.parentURL()+"updateUser"
        return url;
    }

    static deleteUser()
    {
        const url = ParentConfiguration.parentURL()+"deleteUser";
        return url;
    }

    static getDataForIssues()
    {
        const url = ParentConfiguration.parentURL()+"issueData";
        return url;
    }

    static addWorkflow()
    {
        const url = ParentConfiguration.parentURL()+"AddWorkFlow";
        return url;
    }

    static getAllWorkFlows()
    {
        const url = ParentConfiguration.parentURL()+"GetWorkflow";
        return url;
    }

    static assignMember()
    {
        const url = ParentConfiguration.parentURL()+"assign_user";
        return url;
    }

    static teamDetails()
    {
        const url = ParentConfiguration.parentURL()+"userdetails_project";
        return url;
    }

    static postComment()
    {
        const url = ParentConfiguration.parentURL()+"postComment";
        return url;
    }

    static getUserDetailByID()
    {
        const url = ParentConfiguration.parentURL()+"getUserDetailByID";
        return url;
    }

    static createTask()
    {
        const url = ParentConfiguration.parentURL()+"create_Task";
        return url;
    }

    static createDefect()
    {
        const url = ParentConfiguration.parentURL()+"create_Defect";
        return url;
    }

    static allIssuesNew()
    {
        const url = ParentConfiguration.parentURL()+"issue_list";
        return url;
    }
    
}