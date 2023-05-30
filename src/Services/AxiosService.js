import { Axios } from "axios";

export default function AxiosService(params) 
{
    post(url, data) 
    {
        return Axios.post(url, data);
    }    
}