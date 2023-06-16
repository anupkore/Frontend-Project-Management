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
        const url = ParentConfiguration.parentURL()+"Projectwise_Issue";
        return url;
    }

    static particularIssueDetails()
    {
        const url = ParentConfiguration.parentURL()+"issue_explore";
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
        const url = ParentConfiguration.parentURL()+"update_user"
        return url;
    }
    static getUser()
    {
        const url = ParentConfiguration.parentURL()+"useridwise_user"
        return url;
    }

    static deleteUser()
    {
        const url = ParentConfiguration.parentURL()+"delete_user";
        return url;
    }

    static getDataForIssues()
    {
        const url = ParentConfiguration.parentURL()+"issueData";
        return url;
    }

    static addWorkflow()
    {
        const url = ParentConfiguration.parentURL()+"Create_Workflow";
        return url;
    }

    static getAllWorkFlows()
    {
        const url = ParentConfiguration.parentURL()+"GetWorkflow";
        return url;
    }
    static getWorkflowByName(){
        const url = ParentConfiguration.parentURL()+"GetWorkflowByName";
        return url;
    }

    static assignWorkflow(){
        const url = ParentConfiguration.parentURL()+"Assign_Workflow";
        return url;
    }

    static projectWiseWorkflow(){
        const url = ParentConfiguration.parentURL()+"Projectwise_Workflow";
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
//add comment
    static postComment()
    {
        const url = ParentConfiguration.parentURL()+"comment_add";
        return url;
    }

    //delte comment
    static deleteComment()
    {
        const url = ParentConfiguration.parentURL()+"deletecomment";
        return url;
    }
 //edit comment
 static editComment()
 {
     const url = ParentConfiguration.parentURL()+"upadtecomment";
     return url;
 }
  //All comment
  static allComment()
  {
      const url = ParentConfiguration.parentURL()+"display_comment";
      return url;
  }

    

    static getUserDetailByID()
    {
        const url = ParentConfiguration.parentURL()+"getUserDetailByID";
        return url;
    }

    static createTask()
    {
        const url = ParentConfiguration.parentURL()+"create_task";
        return url;
    }

    static createDefect()
    {
        const url = ParentConfiguration.parentURL()+"create_defect";
        return url;
    }

    static allIssuesNew()
    {
        const url = ParentConfiguration.parentURL()+"issue_list";
        return url;
    }

    static getAllEmails()
    {
        const url = ParentConfiguration.parentURL()+"Show_Emails";
        return url;
    }
    
}