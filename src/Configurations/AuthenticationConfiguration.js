import ParentConfiguration from "./ParentConfiguration";

export default class AuthenticationConfiguration
{
    static SignIn()
    {
        const url2 = ParentConfiguration.parentURL();
        console.log(url2);
        return url2;
    }
}