import axios from "axios";

export default class AxiosService 
{
    //For Sign-in form
    static signIn(url, data) 
    {
        return axios.post(url,data);
    }
    
    //For adding new members by the alpha admin
    static SignUp(url, data)
    {
        return axios.post(url , data);
    }

    //For creating the new project form
    static createProject(url , data)
    {
        return axios.post(url , data);
    }

    //For displaying the ist of all projects in table
    static allProjects(url,data)
    {
        return axios.post(url,data);
    }

    //For displaying the details of a perticular project in project explore
    static projectExplore(url,data)
    {
        return axios.post(url,data);
    }

    //For Updating the project (PID)
    static updateProject(url , data)
    {
        return axios.put(url , data);
    }

    //For Deleting a Project (PID)
    static deleteProject(url,data)
    {
        return axios.post(url,data)
    }

    //For Create Issue Form
    static createIssue(url , data)
    {
        return axios.post(url , data);
    }

    //For viewing all issues in issues dashboard
    static allIssues(url)
    {
        return axios.get(url);
    }

    //For displyaing perticular issue details (PID , IssueID)
    static perticularIssueDetails(url)
    {
        return axios.get(url);
    }

    //For Updating The Prticular Issue (PID , Issue ID)
    static updateIssue(url , data)
    {
        return axios.put(url ,data);
    }

    //For deleting an issue (Issue ID)
    static deleteIssue(url)
    {
        return axios.delete(url)
    }

    //For Getting List of All Users Added By The Alpha Admin (For Admin Dashboard)
    static allUsersTable(url)
    {
        return axios.get(url);
    }

    //For Updating users (For alpha admin)
    static updateUsers(url,data)
    {
        return axios.post(url,data);
    }
    static getUser(url,user_id)
    {
        return axios.post(url,user_id);
    }

    //For deleting a user (For alpha admin)
    // static deleteUser(url,user_id)
    // {
    //     return axios.post(url,user_id);
    // }

    static deleteUser(url,data) {
        return axios.post(url,data);
      }

    static getDataForIssues(url)
    {
        return axios.get(url);
    }

    static addWorkflow(url , data)
    {
        return axios.post(url,data);
    }

    static getAllWorkflows(url)
    {
        return axios.get(url);
    }

    static assignMember(url,data)
    {
        return axios.post(url,data);
    }

    //For Getting List of Members Assigned in a Perticular Project (Have to pass PID)
    static teamDetails(url,data)
    {
        return axios.post(url,data);
    }

    static postComments(url,data)
    {
        return axios.post(url,data);
    }

    static getUserDetailByID(url,data)
    {
        return axios.post(url,data);
    }

    static createTask(url,data)
    {
        return axios.post(url,data);
    }

    static createDefect(url,data)
    {
        return axios.post(url,data);
    }

    static allIssuesNew(url,data)
    {
        return axios.post(url,data);
    }


}