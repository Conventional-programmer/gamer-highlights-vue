import axios, {AxiosResponse} from "axios";
import authHeader from "./authentication/auth-header";

export default class BaseService<T> {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    getById(id: number): Promise<T>
    {
        return axios.get<T>(this.baseUrl+ id.toString(),{headers: authHeader()}).then((response) =>{
            console.log(response);
            return response.data;
        });
    }
    getAll(): Promise<T[]>
    {
        return axios.get<T[]>(this.baseUrl,{headers: authHeader()}).then(response => {
            return response.data;
        });
    }
    post(object: T): Promise<AxiosResponse>
    {
        return axios.post(this.baseUrl,object,{headers: authHeader()}).then(response => {
            return response
        });
    }
    put(object: T): Promise<AxiosResponse>
    {
        return axios.put(this.baseUrl,object,{headers: authHeader()}).then(response => {
            return response
        });
    }
}
