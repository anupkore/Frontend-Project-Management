import AuthenticationConfiguration from "../Configurations/AuthenticationConfiguration";
import AxiosService from "./AxiosService";

export default function AuthenticationService() 
{
    SignIn(data) 
    {
        console.log("SignIn : " + AuthenticationConfiguration.SignIn);
        return AxiosService.post(AuthenticationConfig.SignIn, data, false);
    }
}