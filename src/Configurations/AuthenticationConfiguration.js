import ParentConfiguration from "./ParentConfiguration";

export default class AuthenticationConfiguration
{
    static SignIn()
    {
        const url2 = ParentConfiguration.parentURL()+"login";
        console.log(url2);
        return url2;
    }

    static SignUp()
    {
        const url = ParentConfiguration.parentURL()+"add_user";
        return url;
    }
}