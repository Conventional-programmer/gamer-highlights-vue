import BaseService from "@/service/base-service";
import axios from "axios";
import Post from "@/class/post";

class PostService extends BaseService<Post>{
    constructor() {
        super("https://localhost:8080/post/");
    }
    getAllByUserId(id: number): Promise<Post[]> {
        return axios.get<Post[]>(this.baseUrl+"user/"+id.toString()).then((response) => {
            return response.data;
        })
    }
}
export default new PostService();
