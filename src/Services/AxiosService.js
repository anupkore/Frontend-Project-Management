import axios from "axios";

export default class AxiosService 
{
    static Post(url, data) 
    {
        return axios.post(url,data);
    }    
}